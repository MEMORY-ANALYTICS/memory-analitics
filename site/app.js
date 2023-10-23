process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

require("dotenv").config() // arquivo dotenv para variaveis de ambiente

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var emailRouter = require("./src/routes/email");
var empresaRouter = require("./src/routes/empresa");
var dashboardGRouter = require("./src/routes/dashboardG");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/email", emailRouter);
app.use("/empresa", empresaRouter);
app.use("/dashboardG", dashboardGRouter);

app.listen(PORTA, function () {
  console.log(`Servidor rodando na porta ${PORTA}`);
});
