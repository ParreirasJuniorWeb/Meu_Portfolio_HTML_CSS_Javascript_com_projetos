const dot = require("dotenv");
dot.config({ path: "../backend/.env" });
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 3000;

console.log("Servidor rodando!!!");

// Configuração do CORS para permitir requisições do seu frontend
app.use(
  cors({
    origin: "https://meu-portfolio-html-css-javascript-com.onrender.com/", // URL do seu servidor de desenvolvimento
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Middleware para parsing de JSON (se você fosse enviar JSON do frontend)
app.use(express.json());

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT, 10),
  secure: process.env.EMAIL_PORT === "465", // true para 465, false para outras portas como 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // Em alguns ambientes de desenvolvimento, pode ser útil. Em produção, use true.
  },
});

// Rota para o envio de e-mail
app.post("/send-email", async (req, res) => {
  // Dados do formulário estão em req.body
  const { name, email, cell, subject, message } = req.body;

  // ** Validação de dados (REPETIR VALIDAÇÕES DO FRONTEND AQUI É CRÍTICO PARA SEGURANÇA) **
  // Exemplo simples:
  if (!name || !email || !cell || !subject || !message) {
    console.error("Erro de validação: Campos obrigatórios faltando.");
    return res
      .status(400)
      .json({ message: "Por favor, preencha todos os campos obrigatórios." });
  }
  // Validação de e-mail no backend
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    console.error("Erro de validação: Formato de e-mail inválido.");
    return res.status(400).json({ message: "Formato de e-mail inválido." });
  }
  // Validação de Celular
  if (parseInt(cell >= 10) || parseInt(cell <= 11)) {
    console.error("Erro de validação: Celular inválido.");
    return res
      .status(400)
      .json({ message: "Celular inválido. Deve ter entre 10 ou 11 dígitos." });
  }

  // Construção do corpo do e-mail
  const mailOptions = {
    from: process.env.EMAIL_USER, // O remetente do e-mail (pode ser o seu e-mail do servidor)
    to: process.env.TARGET_EMAIL, // O e-mail setorial da SES
    replyTo: email, // Permite responder diretamente ao e-mail do remetente do formulário
    subject: `Novo Contato do Meu Portólio - ${subject}`,
    html: `
      <h2>Nova Mensagem do Formulário de Contato</h2>
      <p><strong>Nome Completo:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Celular:</strong> ${cell}</p>
      <p><strong>Assunto:</strong> ${subject}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
      <br>
      <small>Este e-mail foi enviado automaticamente pelo formulário de contato.</small>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("E-mail enviado:", info.messageId);

    // Sistema de Logs (exemplo simples)
    const logEntry = {
      timestamp: new Date().toISOString(),
      status: "success",
      senderEmail: email,
      subject: subject,
      messageId: info.messageId,
      // Você pode adicionar mais detalhes aqui, como o nome do arquivo, etc.
    };
    console.log("LOG:", logEntry);
    // Em um sistema real, você salvaria isso em um banco de dados ou serviço de log.

    res.status(200).json({
      message: "E-mail enviado com sucesso!",
      messageId: info.messageId,
      // Você pode retornar mais detalhes, como o status de entrega (se o serviço suportar)
    });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    // Sistema de Logs para erros
    const errorLogEntry = {
      timestamp: new Date().toISOString(),
      status: "failure",
      senderEmail: email,
      subject: subject,
      error: error.message,
    };
    console.error("LOG ERRO:", errorLogEntry);

    res.status(500).json({
      message: "Erro ao enviar o e-mail. Tente novamente mais tarde.",
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor backend rodando em http://localhost:${port}`);
});
