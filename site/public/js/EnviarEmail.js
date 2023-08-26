const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

const port = 3000;

const user = "memory.analytics@memoryanalyticscco.com";
const pass = "@Grupo07";

var newUser = "Paulo";
var newPassword = "teste01";
var emailUsuario = "pmarcena2004@gmail.com";

app.get("/", (req, res) => res.send(`Sua senha é: `));

app.get("/send", (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.umbler.com",
    port: 587,
    auth: { user, pass },
  });

  transporter
    .sendMail({
      from: user,
      to: emailUsuario,
      replyTo: "MemoryAnalytics@outlook.com",
      subject: "Senha de acesso!",
      text: `Olá ${newUser} sua senha para o acesso é: ${newPassword}`,
    })
    .then((info) => {
      res.send(info);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(port, () => console.log(`Iniciando na porta ${port}`));
