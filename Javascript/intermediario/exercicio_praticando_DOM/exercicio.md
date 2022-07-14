## Praticando o DOM

Neste exercício vamo fazer um sistema de cadastro de imóveis para uma corretora

- Uma corretora solicitou um sistema onde ela pudesse cadastrar imóveis para serem exibidos aos seus clientes
- Para cadastrar um imóvel, é necessário passar as seguintes informações:
  - tipo (se é casa ou apartamento)
  - área (tamanho em m²)
  - status (alugado ou não)
- Após o cadastro do imóvel, o formulário deve ser limpo para o próximo cadastro
- Abaixo desse formulário, deve haver uma lista com os imóveis que já foram cadastrados e esta lista deve ser atualizada assim que o imóvel é criado no formulário
- Nesta lista, os imóveis alugados devem estar com a marcação "ALUGADO" antes da primeira informação, com fundo vermelho e letras brancas.
- A corretora também deseja poder remover um imóvel cadastrado previamente clicando num botão na lista de imóveis

Para fazer este sistema, utilizar:

- Classes: queremos no mínimo duas classes nesta aplicação

  - uma para o imóvel e outra para a aplicação
  - somente uma classe por arquivo

- Manipulação de DOM
- Chamada de eventos a partir do HTML
