import { prisma } from './prisma';
import express from 'express';
import nodemailer from 'nodemailer';

// iniciando aplicação
const app = express();

// express não entende json do body
app.use(express.json());

// Serviço de envio de email
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "286a767c22f5cb",
    pass: "cf8a3fc1bc2937"
  }
});

// Criando novo feedback
app.post('/feedbacks', async (req, res) => {
  // req - o que vem de informação quando o usuário chama a rota;
  // res - resposta que vou devolver ao usuário;
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot
    }
  });
  5411
  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Pietro Sera <email@email.com>',
    subject: 'Novo feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`,
    ].join('\n')
  });

  // Status de criação 201
  return res.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});

// 38m40s instalando insomnia para testar rota de feedbacks