# Number Classification API

## Overview
The **Number Classification API** is a RESTful API that takes an integer as input and returns its mathematical properties, including whether it is prime, perfect, Armstrong, even/odd, and the sum of its digits. It also fetches a fun fact about the number using the [Numbers API](http://numbersapi.com/).

---

## Features
✅ Accepts an integer as a query parameter  
✅ Identifies mathematical properties such as prime, perfect, Armstrong, even/odd  
✅ Computes the sum of the number’s digits  
✅ Fetches a fun fact from the Numbers API  
✅ Returns structured JSON responses  
✅ Handles errors gracefully  
✅ Supports CORS for cross-origin access  

---

## API Specification

### **Base URL**
<your-deployment-url>/api/classify-number?number={integer}

Replace `<your-deployment-url>` with the actual deployed API URL.

### **Example Request**
```bash
GET /api/classify-number?number=371

## Installation & Usage
### Prerequisites
### Node.js installed
### Express.js for backend framework

## Setup
### Clone the repository:
git clone https://github.com/AghaulorGift-HNG12/backend.git
cd backend


Install dependencies:
npm install

Start the server:
node server.js
Access the API locally at:

http://localhost:5000/api/classify-number?number=371

## Deployment
### This API can be deployed on any cloud platform supporting Node.js, such as:

### Heroku
### Vercel
### Render
### AWS Lambda (via API Gateway)

## Project Structure

��� numclassification-api
 ┣ ��� server.js    # Main Express server
 ┣ ��� package.json # Project dependencies
 ┣ ��� README.md    # API documentation

## Technologies Used
### Node.js – JavaScript runtime
### Express.js – Web framework
### Axios – API requests
### Numbers API – Fun fact retrieval

## License
### This project is licensed under the MIT License.

## Author
(Aghaulor Gift)[Aghaulor Gift]
[aghaulor.gift@gmail.com](aghaulor.gift@gmail.com)
[https://github.com/AghaulorGift-HNG12](GitHub Profile)

