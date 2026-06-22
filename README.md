# 🕵️‍♂️ CPF Validator API

A lightweight and efficient REST API built with Node.js to validate and format Brazilian CPF (Cadastro de Pessoas Físicas) numbers. 

This project receives an 11-digit numeric string, runs the official mathematical validation algorithm to verify its authenticity, and returns the validation status alongside the correctly formatted CPF string.

[Leia em Português](README-pt.md)

---

## 📋 Features

✅ Validate any 11-digit numerical string

✅ Mathematical verification of check digits (Dígitos Verificadores)

✅ Rejects invalid sequences of repeated numbers (e.g., `11111111111`)

✅ Automatically formats valid CPFs to the standard `xxx.xxx.xxx-xx` pattern

✅ RESTful API architecture using Express.js

---

## 🛠️ Technologies Used

### Backend
- Node.js
- Express.js

---

## 📂 Project Structure

```text
CPF-VALIDATOR
│
├── src
│   └── index.js
│
├── node_modules/
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── README-pt.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/yaanmark/cpf-validator.git
```

### 2. Navigate to the project folder

```bash
cd cpf-validator
```

### 3. Install dependencies

```bash
npm install
```

---

## 🇧🇷 What is a CPF and How is it Validated?

### What is a CPF?
The **CPF (Cadastro de Pessoas Físicas)** is the Brazilian individual taxpayer registry identification. It is issued by the Brazilian Federal Revenue (Receita Federal) to both Brazilians and resident aliens. The number consists of 11 digits: the first 9 are the base numbers, and the last 2 are **check digits** (dígitos verificadores) used to prevent typos and invalid entries.

### The Calculation Logic
To validate a CPF, we do not check a database; we run a mathematical algorithm against the first 9 digits to see if the result matches the 2 check digits provided. 

**1. Calculating the First Check Digit ($C_1$):**
We take the first 9 digits ($d_1$ to $d_9$) and multiply them by descending weights ($w$) starting from 10 down to 2.

$$S_1 = \sum_{i=1}^{9} (d_i 	imes w_i)$$

Next, we find the remainder ($R_1$) of the sum divided by 11:

$$R_1 = S_1 \pmod{11}$$

- If $R_1 < 2$, the first check digit is **$0$**.
- If $R_1 \geq 2$, the first check digit is **$11 - R_1$**.

**2. Calculating the Second Check Digit ($C_2$):**
We repeat the process, but this time we include the first check digit ($C_1$) as our 10th digit ($d_{10}$), and the descending weights start from 11 down to 2.

$$S_2 = \sum_{i=1}^{10} (d_i 	imes w_i)$$

We find the new remainder:

$$R_2 = S_2 \pmod{11}$$

- If $R_2 < 2$, the second check digit is **$0$**.
- If $R_2 \geq 2$, the second check digit is **$11 - R_2$**.

If both calculated digits match the last two digits of the provided string, the CPF is mathematically valid!

---

## 🚀 Running the Application

### Start the Server

Inside the project root folder, run:

```bash
npm start
```
*(Or `node index.js` if no start script is configured)*

The API will run at:

```text
http://localhost:3000
```

---

## 🔌 API Endpoints

### Validate CPF

```http
GET /validar-cpf/:cpf
```

**Success Response (200 OK):**
```json
{
  "valido": true,
  "cpf_formatado": "123.456.789-00",
  "mensagem": "CPF válido e pronto para uso!"
}
```

**Error Response (400 Bad Request):**
```json
{
  "valido": false,
  "mensagem": "O CPF informado é inválido."
}
```

---

## 📦 Core Dependencies

```json
{
  "express": "^4.x"
}
```

---

## 🎯 Learning Objectives

This project demonstrates skills in:

- Backend Web Development using Node.js
- REST API Routing with Express
- Implementation of complex mathematical algorithms for data validation
- Regular Expressions (RegEx) for string manipulation and formatting
- Clean and decoupled code structure

---

## 📸 Future Improvements

- Add automated unit tests using Jest
- Create a frontend interface to consume the API
- Add CORS middleware to allow external frontend connections
- Implement rate-limiting to prevent abuse

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Yan

Developed as an educational API project using Node.js, Express, and JavaScript validation logic.

⭐ If you found this project useful, consider giving it a star!
