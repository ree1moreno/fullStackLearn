## Praticando objetos

Faremos um aplicativo que fará o mapeamento de velocidade de uma espaçonave.

Neste aplicativo, vamos cadastrar uma espaçonave com seu nome, tipo e a velocidade máxima que esta nave pode atingir para que não entre em combustão.

1. Nave deve partir da velocidade 0 km/s

2. Menu deve ser exibido para o usuário perguntando se ele quer acelerar ou parar a nave.

- se ele quiser parar, uma mensagem deve ser exibida com as características da nave (nome e tipo) e em que velocidade estava.
- se ele quiser acelerar, deve ser exibido um prompt para que ele informe quanto ele quer acelerar e este valor será incrementado na velocidade

3. Quando a velocidade for incrementada, deve-se fazer uma verificação para ver se a espaçonave está acima da velocidade máxima dela.

- se ela estiver, uma mensagem deve ser exibida informando a velocidade da nave e a velocidade máxima permitida.

Para resolver estes problemas, precisaremos:

- Exibir um prompt para o nome da nave
- Exibir um prompt para o tipo da nave
- Exibir um prompt para velocidade máxima desta nave
- Exibir um prompt perguntando se o usuário quer acelerar ou parar
- Se ele quiser acelerar ou parar, vamos exibir a mensagem final descrita
- Criar um objeto para a nave
