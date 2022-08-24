const personagem1 = prompt("Insira o nome do seu personagem: ");
const poderDeAtaque = Number(
  prompt("Insira o poder de ataque do seu personagem (1 a 200): "),
);
const personagem2 = prompt("Insira o nome do seu oponente: ");
const pontosDeVida = Number(
  prompt("Insira os pontos de vida do oponente (1 a 100): "),
);
const poderDeDefesa = Number(
  prompt("Insira os pontos de defesa do oponente (1 a 100): "),
);
const possuiEscudo = prompt(
  "O oponente possui escudo?\n - S\n - N",
).toLowerCase();
let dano;

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "n") {
  dano = poderDeAtaque - poderDeDefesa;
  alert(
    `O dano foi de ${dano} pontos. Restam ${
      pontosDeVida - dano
    } pontos de vida.`,
  );
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "s") {
  dano = (poderDeAtaque - poderDeDefesa) / 2;
  alert(
    `O dano foi de ${dano} pontos. Restam ${
      pontosDeVida - dano
    } pontos de vida.`,
  );
} else {
  dano = 0;
  alert(
    `O dano foi de ${dano} pontos. Restam ${
      pontosDeVida - dano
    } pontos de vida.`,
  );
}
