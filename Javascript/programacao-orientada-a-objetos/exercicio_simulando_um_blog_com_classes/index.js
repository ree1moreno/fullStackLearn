const Author = require("./Author");

const john = new Author("John Doe");

const post = john.writePost("Título do post", "lorem ipsum dolor sic...");

post.addComment("Isaac Pontes", "Muito bom!");
post.addComment("Lucas", "Achei interessante.");

console.log(john);
console.log(post);
