const express = require ('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function isPerfect(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) sum += i;
    }
    return sum === n;
}

function isArmstrong(n) {
    let digits = n.toString().split("").map(Number);
    return digits.reduce((sum, d) => sum + Math.pow(d, digits.length), 0) === n;
}

function getProperties(n) {
	 let properties = [];
    if (isArmstrong(n)) properties.push("armstrong");
    properties.push(n % 2 === 0 ? "even" : "odd");
    return properties;
}

async function getFunFact(n) {
    try {
        let response = await axios.get(`http://numbersapi.com/${n}/math?json`);
        return response.data.text || "No fact available";
    } catch (error) {
        return "No fact available";
    }
}

app.get("/api/classify-number", async (req, res) => {
    let { number } = req.query;
    if (!number || isNaN(number)) {
        return res.status(400).json({ number, error: true });
    }

    number = parseInt(number);
    res.json({
        number,
        is_prime: isPrime(number),
        is_perfect: isPerfect(number),
        properties: getProperties(number),
        digit_sum: number.toString().split("").reduce((sum, d) => sum + parseInt(d), 0),
     fun_fact: await getFunFact(number)
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

