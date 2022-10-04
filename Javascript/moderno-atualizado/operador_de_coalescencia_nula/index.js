const a = 0; // zero = falso

const b = null; // null = falso

const c = "Teste"; // conteudo = verdadeiro

console.log(a || b || c); // Teste

console.log(a ?? b ?? c); // 0

console.log(b ?? c); // Teste

console.log(c ?? b ?? a); // Teste

let d = 0;

let e = d || 42;

console.log({ d, e }); // d = 0 e e = 42

e = d ?? 42;

console.log({ d, e }); // d = 0 e e = 0
