let primeiroNome = prompt("Informe o nome de uma pessoa");
let primeiraIdade = prompt("Informe a idade de uma pessoa");
let segundoNome = prompt("Informe outro nome");
let segundaIdade = prompt("Informe outra idade");

let diferencaIdade = primeiraIdade - segundaIdade;

if (diferencaIdade > 0) {
  alert(`A pessoa mais velha é: ${primeiroNome}
  A pessoa mais nova é: ${segundoNome}
  A diferença de idade é: ${diferencaIdade} anos`);
}

if (diferencaIdade < 0) {
  alert(`A pessoa mais velha é: ${segundoNome}
  A pessoa mais nova é: ${primeiroNome}
  A diferença de idade é: ${-diferencaIdade} anos`);
}
