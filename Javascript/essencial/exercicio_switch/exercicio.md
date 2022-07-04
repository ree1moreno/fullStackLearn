## Fixando o uso do Switch

1. Perguntar a distância em anos-luz

2. Oferecer uma lista de opções com:

- Parsec(pc)
- Unidade astronômica(AU)
- Quilômetros(km)

3. Perguntar qual operação deseja realizar

4. Utilize o switch para verificar a opção escolhida pelo usuário

5. Exiba com um alerta contendo a distância em anos-luz e a distância convertida para a operação desejada

6. Utilize as seguintes conversões

- 1 l.y = 0,306601 pc
- 1 l.y = 63241,1 AU
- 1 l.y = 9,5 x 10¹² km

7. Utilize a biblioteca Math para a conversão de anos-luz para quilômetros

- Math.pow(10,12) para obter o valor de 10¹² na conversão

8. Caso o usário digite uma oção que não seja uma das três, em vez do nome da distância e da conversão, deve ser exibido:

- Distância em anos-luz:
  Unidade não identificada: Conversão fora do escopo
