const express = require("express");
const routes = require("./routes");

require("../config/associations");

const app = express();

app.use(express.json());
app.use(routes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
