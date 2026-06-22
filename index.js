const express = require('express');
const app = express();

function validarCPF(cpf) {
    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;

    const numeros = cpf.split('').map(Number);
    
    const calcularDigito = (quantidade) => {
        let soma = 0;
        for (let i = 0; i < quantidade; i++) {
            soma += numeros[i] * (quantidade + 1 - i);
        }
        let resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    };

    return calcularDigito(9) === numeros[9] && calcularDigito(10) === numeros[10];
}

function formatarCPF(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

app.get('/validar-cpf/:cpf', (req, res) => {
    let { cpf } = req.params;

    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11) {
        return res.status(400).json({ erro: "O CPF deve conter exatamente 11 dígitos numéricos." });
    }

    const ehValido = validarCPF(cpf);

    if (ehValido) {
        res.status(200).json({
            valido: true,
            cpf_formatado: formatarCPF(cpf),
            mensagem: "CPF válido e pronto para uso!"
        });
    } else {
        res.status(400).json({
            valido: false,
            mensagem: "O CPF informado é inválido."
        });
    }
});

const PORTA = 3000;
app.listen(PORTA, () => {
    console.log(`Acesse a API em: http://localhost:${PORTA}`);
});