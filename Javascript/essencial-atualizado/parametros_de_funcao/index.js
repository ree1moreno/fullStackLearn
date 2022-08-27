function dobro(x) {
  alert(`O dobro de ${x} é ${x * 2}!`);
}

// dobro(5);
// dobro(7);

// dobro();

function ola(nome = "mundo") {
  alert(`Olá, ${nome}!!`);
}

// ola("Renato");
// ola();

function soma(a, b) {
  alert(`O resultado da soma é ${a + b}`);
}

// soma(7, 6);
// soma(1, 1);

function criarUsuario(nome, email, senha, tipo = "admin") {
  const usuario = {
    nome,
    email,
    senha,
    tipo,
  };

  console.log(usuario);
}

// criarUsuario("Isaac", "isaac@email.com", "1234");
// criarUsuario("isaac@email.com", "Isaac", "1234"); // errado

function novoUsuario(nome, tipo = "admin", email, senha) {
  const usuario = {
    nome,
    email,
    senha,
    tipo,
  };

  console.log(usuario);
}

novoUsuario("Isaac", "isaac@email.com", "1234");
// {nome: 'Isaac', email: '1234', senha: undefined, tipo: 'isaac@email.com'}

function muitosParametros(
  nome,
  telefone,
  endereco,
  aniversario,
  email,
  senha,
) {}

muitosParametros(
  "nome",
  "telefone",
  "endereco",
  "aniversario",
  "email",
  "senha",
);

function objetoComoParametro(usuario) {
  usuario.nome;
  usuario.telefone;
}

const dadosUsuario = {
  nome: "",
  telefone: "",
  endereco: "",
  aniversario: "",
  email: "",
  senha: "",
};

objetoComoParametro(dadosUsuario);
