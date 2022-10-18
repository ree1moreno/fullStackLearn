## Exercício - Utilizando Promises

- Imagine que estamos para partir numa viagem interplanetária e temos 3 naves à nossa disposição. Porém, as naves têm um dispositivo que não permite a nossa partida com a bateria abaixo de 30% da capacidade máxima. Cada nave tem sua capacidade em GigaJoules(GJ).

- As 3 naves que temos são:

  - Sophia: com capacidade de 10GJ e carga atual de 5GL;
  - Amsterdã: com capacidade de 14GJ e carga atual de 10GJ;
  - Estrela-Anã: com capacidade de 20GJ e carga atual de 4GJ;

- Queremos dar partida nas 3 e ver com quais delas conseguimos sair.

Para resolver o exercício:

- Crie uma classe "Spaceship" para nave num arquivo separado
  Esta classe deve conter os 3 atributos e deve conter um método que retorne a porcentagem da carga atual. <br>
  Fórmula: porcentagem da carga atual = carga atual \* 100 / capacidade máxima

- Crie uma classe "SpaceshipEngine" que será a responsável por ligar a nave
  Ela deve ser instanciada com um objeto 'Spaceship' <br>
  Deve possuir um método ligar, que deve ser assíncrono e que faça a checagem de combustível utilizando o método da porcentagem da carga atual que foi criada na classe 'Spaceship'
