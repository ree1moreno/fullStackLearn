let primeiroNumero = Number(prompt("Digite um número inteiro: "));
let segundoNumero = Number(prompt("Digite outro número inteiro: "));

let soma = primeiroNumero + segundoNumero;
let subtracao = primeiroNumero - segundoNumero;
let multiplicacao = primeiroNumero * segundoNumero;
let divisao = (primeiroNumero / segundoNumero).toFixed(2);

alert(`Os resultados obtidos com seus números foram:
soma: ${soma},
subtração: ${subtracao},
multiplicação: ${multiplicacao},
divisão: ${divisao}.
`);
