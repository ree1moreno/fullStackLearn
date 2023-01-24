import express from "express";
import { adminJs, adminJsRouter } from "./adminjs";
import { sequelize } from "./database";

const app = express();

app.use(express.static("public"));

// app.use(caminho, rotas)
app.use(adminJs.options.rootPath, adminJsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log(`DB connection successfuly`);
  });
  console.log(`Server started successfuly at port ${PORT}`);
});