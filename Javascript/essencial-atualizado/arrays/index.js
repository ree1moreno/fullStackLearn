// const listaDeCompras = ["Açúcar", false];

// console.log(listaDeCompras);

// listaDeCompras[0] = "Arroz";
// listaDeCompras[1] = "Feijão";
// listaDeCompras[2] = 7;
// listaDeCompras[5] = "Batata";
// console.log(listaDeCompras);

// listaDeCompras[4];

// console.log(listaDeCompras[4]);

const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];

console.log(arr);

// Adicionar elementos
// push - adiciona valor ao final do array

arr.push("Boromir");
console.log(arr);

// unshift - adiciona valor no começo do array
arr.unshift("Boromir");
console.log(arr);

// Remover elementos
// pop - remove o último elemento do array

const ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

// shift - remove o primeiro elemento do array
const primeiroElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

// Pesquisar por um elemento
// includes - verifica se existe um elemento no array

const inclui = arr.includes("Gandalf");
console.log(inclui);

// indexOf - verifica o índice do elemento
const indice = arr.indexOf("Gandalf");
console.log(indice);

// Cortar e Concatenar
// slice - cortar - cria uma cópia do array e salva em um novo com a parte escolhida pelos indíces indicados - não modifica o array original

const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4); // pega a partir do final do array
console.log(hobbits);
console.log(outros);

// concat
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

// Substituição de elementos
// splice - remove um grupo de elementos e substituir por outros
const elementosRemovidos = sociedade.splice(indice, 1, "Galdaf, o Cinzento");
console.log(sociedade);
console.log(elementosRemovidos);

// Iterar sobre os elementos

for (let i = 0; i < sociedade.length; i++) {
  const elemento = sociedade[i];
  console.log(`${elemento} se encontra na posição ${i}`);
}
