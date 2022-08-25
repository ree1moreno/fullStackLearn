const medidaEmMetros = Number(
  prompt("Bem vindo ao conversor de medidas!\nInsira o valor em metros."),
);

const medidaParaConverter = prompt(
  "Escolha para qual unidade de medida deseja converter o seu valor:\n- milímetro (mm)\n- centímetro (cm)\n- decímetro (dm)\n- decâmetro (dam)\n- hectômetro (hm)\n- quilômetro (km)",
);

switch (medidaParaConverter) {
  case "mm":
    alert(
      `${medidaEmMetros} metro(s) é igual a ${
        medidaEmMetros * 1000
      } milímetros(mm).`,
    );
    break;
  case "cm":
    alert(
      `${medidaEmMetros} metro(s) é igual a ${
        medidaEmMetros * 100
      } centímetros(cm).`,
    );
    break;
  case "dm":
    alert(
      `${medidaEmMetros} metro(s) é igual a ${
        medidaEmMetros * 10
      } decímetros(dm).`,
    );
    break;
  case "dam":
    alert(
      `${medidaEmMetros} metro(s) é igual a ${
        medidaEmMetros / 10
      } decâmetros(dam).`,
    );
    break;
  case "hm":
    alert(
      `${medidaEmMetros} metro(s) é igual a ${
        medidaEmMetros / 100
      } hectômetros(hm).`,
    );
    break;
  case "km":
    alert(
      `${medidaEmMetros} metro(s) é igual a ${
        medidaEmMetros / 1000
      } quilômetros(km).`,
    );
    break;

  default:
    alert("Opção inválida!");
}
