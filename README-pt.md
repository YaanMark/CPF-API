# 🕵️‍♂️ API de Validação de CPF

Uma API REST leve e eficiente construída com Node.js para validar e formatar números de CPF (Cadastro de Pessoas Físicas). 

Este projeto recebe uma string numérica de 11 dígitos, executa o algoritmo matemático oficial de validação para verificar sua autenticidade e retorna o status da validação junto com a string do CPF formatada corretamente.

[Read in English](README.md)

---

## 📋 Funcionalidades

✅ Valida qualquer string numérica de 11 dígitos

✅ Verificação matemática dos Dígitos Verificadores

✅ Rejeita sequências inválidas de números repetidos (ex: `11111111111`)

✅ Formata automaticamente CPFs válidos para o padrão `xxx.xxx.xxx-xx`

✅ Arquitetura de API RESTful usando Express.js

---

## 🛠️ Tecnologias Utilizadas

### Backend
- Node.js
- Express.js

---

## 📂 Estrutura do Projeto

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

## ⚙️ Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/yaanmark/cpf-validator.git
```

### 2. Navegue até a pasta do projeto

```bash
cd cpf-validator
```

### 3. Instale as dependências

```bash
npm install
```

---

## 🇧🇷 O que é um CPF e como ele é validado?

### O que é um CPF?
O **CPF (Cadastro de Pessoas Físicas)** é a identificação de registro de contribuinte individual no Brasil. O número é composto por 11 dígitos: os 9 primeiros são os números base e os 2 últimos são os **dígitos verificadores**, usados para evitar erros de digitação e entradas inválidas.

### A Lógica de Cálculo
Para validar um CPF, não consultamos um banco de dados; executamos um algoritmo matemático nos 9 primeiros dígitos para verificar se o resultado corresponde aos 2 dígitos verificadores fornecidos. 

**1. Calculando o Primeiro Dígito Verificador ($C_1$):**
Pegamos os 9 primeiros dígitos ($d_1$ a $d_9$) e os multiplicamos por pesos decrescentes ($w$) começando de 10 até 2.

$$S_1 = \sum_{i=1}^{9} (d_i \times w_i)$$

Em seguida, encontramos o resto ($R_1$) da soma dividida por 11:

$$R_1 = S_1 \pmod{11}$$

- Se $R_1 < 2$, o primeiro dígito verificador é **0**.
- Se $R_1 \geq 2$, o primeiro dígito verificador é **11 - R_1**.

**2. Calculando o Segundo Dígito Verificador ($C_2$):**
Repetimos o processo, mas desta vez incluímos o primeiro dígito verificador ($C_1$) como nosso 10º dígito ($d_{10}$), e os pesos decrescentes começam de 11 até 2.

$$S_2 = \sum_{i=1}^{10} (d_i \times w_i)$$

Encontramos o novo resto:

$$R_2 = S_2 \pmod{11}$$

- Se $R_2 < 2$, o segundo dígito verificador é **0**.
- Se $R_2 \geq 2$, o segundo dígito verificador é **11 - R_2**.

Se ambos os dígitos calculados corresponderem aos dois últimos dígitos da string fornecida, o CPF é matematicamente válido!

---

## 🚀 Executando a Aplicação

### Inicie o Servidor

Dentro da pasta raiz do projeto, execute:

```bash
npm start
```
*(Ou `node index.js` se não houver script start configurado)*

A API rodará em:

```text
http://localhost:3000
```

---

## 🔌 Endpoints da API

### Validar CPF

```http
GET /validar-cpf/:cpf
```

**Resposta de Sucesso (200 OK):**
```json
{
  "valido": true,
  "cpf_formatado": "123.456.789-00",
  "mensagem": "CPF válido e pronto para uso!"
}
```

**Resposta de Erro (400 Bad Request):**
```json
{
  "valido": false,
  "mensagem": "O CPF informado é inválido."
}
```

---

## 📦 Dependências Principais

```json
{
  "express": "^4.x"
}
```

---

## 🎯 Objetivos de Aprendizado

Este projeto demonstra habilidades em:

- Desenvolvimento Web Backend com Node.js
- Roteamento de API REST com Express
- Implementação de algoritmos matemáticos complexos para validação de dados
- Expressões Regulares (RegEx) para manipulação e formatação de strings
- Estrutura de código limpa e desacoplada

---

## 📸 Melhorias Futuras

- Adicionar testes unitários automatizados com Jest
- Criar uma interface frontend para consumir a API
- Adicionar middleware CORS para permitir conexões de frontend externo
- Implementar rate-limiting para evitar abusos

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT.

---

## 👨‍💻 Yan

Desenvolvido como um projeto educacional de API usando Node.js, Express e lógica de validação em JavaScript.

⭐ Se você achou este projeto útil, considere dar uma estrela!