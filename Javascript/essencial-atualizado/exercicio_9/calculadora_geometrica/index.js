const areas = {
  triangulo: (base, altura) => (base * altura) / 2,
  retangulo: (base, altura) => base * altura,
  quadrado: (lado) => lado ** lado,
  trapezio: (baseMaior, baseMenor, altura) =>
    ((baseMaior + baseMenor) * altura) / 2,
  circulo: (pi, raio) => pi * raio ** 2,
};

let menu;

do {
  menu = prompt(`Escolha qual operação deseja fazer:
1 - Área do triângulo
2 - Área do retângulo
3 - Área do quadrado
4 - Área do trapézio
5 - Área do círculo
6 - Sair`);

  switch (menu) {
    case "1":
      alert("Calculando a área do triângulo.");
      const baseTriangulo = Number(prompt("Informe o tamanho da base"));
      const alturaTriangulo = Number(prompt("Informe o tamanho da altura"));
      const areaTriangulo = areas["triangulo"](baseTriangulo, alturaTriangulo);
      alert(`A área do triângulo é ${areaTriangulo} cm²`);
      break;
    case "2":
      alert("Calculando a área do retângulo.");
      const baseRetangulo = Number(prompt("Informe o tamanho da base"));
      const alturaRetangulo = Number(prompt("Informe o tamanho da altura"));
      const areaRetangulo = areas["retangulo"](baseRetangulo, alturaRetangulo);
      alert(`A área do retângulo é ${areaRetangulo} cm²`);
      break;
    case "3":
      alert("Calculando a área do quadrado.");
      const lado = Number(prompt("Informe o tamanho do lado"));
      const areaQuadrado = areas["quadrado"](lado);
      alert(`A área do quadrado é ${areaQuadrado} cm²`);
      break;
    case "4":
      alert("Calculando a área do trapézio.");
      const baseMaior = Number(prompt("Informe o tamanho da base maior"));
      const baseMenor = Number(prompt("Informe o tamanho da base menor"));
      const alturaTrapezio = Number(prompt("Informe o tamanho da altura"));
      const areaTrapezio = areas["trapezio"](
        baseMaior,
        baseMenor,
        alturaTrapezio,
      );
      alert(`A área do trapézio é ${areaTrapezio} cm²`);
      break;
    case "5":
      alert("Calculando a área do círculo.");
      const pi = 3.14;
      const raio = Number(prompt("Informe o tamanho do raio"));
      const areaCirculo = areas["circulo"](pi, raio);
      alert(`A área do círculo é ${areaCirculo.toFixed(2)} cm²`);
      break;
    case "6":
      alert("Saindo da calculadora..");
      break;

    default:
      alert("Opção inválida!");
  }
} while (menu !== "6");
