function dividir(num) {
  console.log(num);
  if (num % 2 === 0) {
    dividir(num / 2);
  } else {
    return num;
  }
}

dividir(40);
dividir(256);

function fatorial(num) {
  console.log("Número:" + num);
  if (num === 0 || num === 1) return 1;

  console.log(num + " * ! " + (num - 1));
  return num * fatorial(num - 1);
}

console.log(fatorial(1));
console.log(fatorial(0));
console.log(fatorial(5));
