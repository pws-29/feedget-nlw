import { prisma } from './prisma';
import express from 'express';

// iniciando aplicação
const app = express();

// express não entende json do body
app.use(express.json());

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

  // Status de criação 201
  return res.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});

// 38m40s instalando insomnia para testar rota de feedbacks