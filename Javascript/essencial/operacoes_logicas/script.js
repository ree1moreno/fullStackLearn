// Expressões contruídas a partir de operações com valores booleanos

// Também retornam um valor booleano

// Seguimos os resultados lógicos contidos na Tabela Verdade

// Exemplo 1
// console.log(10 > 4); // true
// console.log(10 > 4 || 5 <= 5); // true

// Exemplo 2
// console.log(0 >= 0 || 5 > 6 && 1 > 0); // true

//A tabela verdade do AND(e), só é verdadeiro caso todos os valores da expressão retornem true
// A tabela verdade do OR(ou) só é falso caso todos os valores sejam falso
// A tabela verdade do NOT(não) o que é verdadeiro vai retornar falso e  que é falso vai ser tornar verdadeiro

let spaceship = "Elemental";
let velocity = 20;

console.log("1", spaceship.length == 9 && velocity > 15);
// V e V = V

console.log("2", velocity > 10 && velocity < 19);
// V e F = F

console.log("3", velocity < 17 && spaceship == "Elemental");
// F e V = F

console.log("4", spaceship == "Golias" && velocity > 21);
// F e F = F

console.log("5", spaceship.length == 9 || velocity > 15);
// V ou V = V

console.log("6", velocity > 10 || velocity < 19);
// V ou F = V

console.log("7", velocity < 17 || spaceship == "Elemental");
// F ou V = V

console.log("8", spaceship == "Golias" || velocity > 21);
// F ou F = F

console.log("9", !(velocity > 19));
// NAO V = F

console.log("10", !(spaceship == "Golias"));
// NAO F = V

console.log(
  "11",
  !(velocity > 25 && spaceship == "Elemental") ||
    (velocity - 3 == 17 && spaceship.length + 1 > 15),
);
// !(F && V) || (17 == 17 && 10 > 15)
// !(F) || (V && F)
// V OU F = V
