## Revisão de Classes

Vamos criar um sistema de monitoramento de uma nave espacial.<br>
Logo que o sistema é iniciado, ele deve pedir os dados da nave. <br>
Para a nave, que for cadastrada, precisamos de:

- Nome
- Quantidade de tripulantes

Os veículos podem ser de batalha ou de transporte <br>
Caso seja de batalha:

- deverá pedir quantas armas a nave tem disponíveis
  Caso seja de transporte:
- pedir o número de lugares que ela comporta

Além disso, a nave deve ser iniciada com velocidade atual igual a 0.<br>

Um menu deverá ser apresentado ao usuário com as opções:

1. Acelerar a nave
2. Trocar a nave
3. Imprimir e sair

Para acelerar a nave, é necessário pedir a aceleração<br>

A velocidade deve aumentar 83% da aceleração passada como parâmetro devido à taxa de desaceleração.<br>

Para a nossa aplicação, toda aceleração tem uma taxa de desaceleração fixa de 17%.

- velocidade atual + (aceleração x ( 1 - taxa de desaceleração))

Outra importante funcionalidade é trocar a nave. <br>

Para trocar, todos os dados de cadastro serão solicitados novamente e a nova nave será iniciada com velocidade 0. <br>

Na última opção, precisaremos imprimir a espaçonave e sair <br>

A impressão deve ser no formato:

- Nome: <nome>
- Quantidade de tripulantes: <quantidade>
- Velocidade atual: <velocidade>
