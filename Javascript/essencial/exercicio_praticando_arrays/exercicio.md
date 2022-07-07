## Praticando arrays

Temos abaixo um array bidimensional de naves que estão engatadas numa estação espacial.

Para cada sub-array, a primeira posição é o nome da nave, a segunda é a quantidade de tripulantes e a terceira informa se o processo de engate já foi concluído ou não.

Nesta lista, a plataforma de engate que a nave está parada é o índice da nave no array + 1.

const hitchedSpaceships = [
["Fenix", 8, true],
["Golias", 10, true],
["Helmet", 5, false],
["Elemental", 3, true],
["Darwin", 15, false]
]

Com base neste array, queremos:

1. Filtrar o nome das naves que tem mais de 9 tripulantes.

2. Informar o número da plataforma em que está a primeira nave que ainda está com engate pendente.

3. Destacar o nome de todas as naves colocando-as em caixa alta e exibindo.

4. Exibir um alerta com todas essas informações.
