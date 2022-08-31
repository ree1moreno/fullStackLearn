const fs = require("fs");

// cria novo conteúdo no arquivo - substitui tudo caso o arquivo ja exista
fs.writeFile("test.txt", "Olá NodeJs\n", (err) => console.log(err));

// adiciona conteúdo ao arquivo
fs.appendFile("test.txt", "Olá NodeJs", (err) => console.log(err));

// renomeia um arquivo
fs.rename("test.txt", "test2.txt", (err) => console.log(err));

// remove um arquivo
fs.unlink("test2.txt", (err) => console.log(err));

//caminho atual
console.log(__dirname);
