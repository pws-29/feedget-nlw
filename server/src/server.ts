import express from 'express';

// iniciando aplicação
const app = express();

app.get('/users', (req, res) => {
  // req - o que vem de informação quando o usuário chama a rota;\
  // res - resposta que vou devolver ao usuário
  return res.send('Hello World');
});

app.listen(3333, () => {
  console.log('Server started on port 3333!');
}); 