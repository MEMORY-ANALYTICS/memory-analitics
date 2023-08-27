const nodemailer = require("nodemailer");

const host = "smtp-mail.outlook.com";
const port = 587;
const user = process.env.MAILER_EMAIL;
const pass = process.env.MAILER_PASS;

const transporter = nodemailer.createTransport({
  host: host,
  port: port,
  secure: false,
  auth: {
    user: user,
    pass: pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

async function enviar(nome, email, senha) {
  console.log(
    `Acessei a model do email. Nome = ${nome}, Email = ${email}, Senha = ${senha}`
  );

  const mailSent = await transporter.sendMail({
    text: 
`
Olá ${nome}

Recebemos a sua solicitação e estamos muito contentes que você optou por nossos serviços! 

Criamos uma conta de administrador para o seu email (${email}) e geramos uma senha de acesso único para você. 

Sua Senha: ${senha}

Para entrar no sistema, acesse "localhost:3333/login.html".
        
Nossa equipe está à disposição para o esclarecimento de quaisquer dúvidas que tiver

Obrigado pela Oportunidade!
Memory Analytics`,
    subject: "Senha de Acesso M.O.S",
    from: "MemoryAnalytics@outlook.com",
    to: [`${email}`],
  });

  console.log(mailSent);
  return mailSent;
}

module.exports = {
  enviar,
};
