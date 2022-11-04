// const book = {
//   title: "Eragon",
//   pages: 468,
//   published: true,
//   inStock: 20,
//   tags: ["fantasy", "adventure", "medieval"],
//   author: {
//     name: "Christopher Paolini",
//   },
//   addOnStock(quantity) {
//     this.inStock += quantity;
//   },
//   save: () => {
//     // salva no bando de dados
//   },
// };

// console.log(book);

// book.addOnStock(50);

// console.log(`Novo estoque: ${book.inStock}`);

// PascalCase
function Book(title, pages, tags, author) {
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.published = false;
  this.inStock = 0;
  this.addOnStock = function addOnStock(quantity) {
    this.addOnStock += quantity;
  };
  this.save = () => {
    // salva no banco de dados
  };
}

const author = { name: "Christopher Paolini" };
const tags = ["fantasy", "adventure", "medieval"];

const eragon = new Book("Eragon", 468, tags, author);

console.log(eragon);

const eldest = new Book("Eldest", 644, tags, author);

console.log(eldest);
