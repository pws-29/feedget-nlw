import express from 'express';
import { routes } from './routes';

// iniciando aplicação
const app = express();

// express não entende json do body
app.use(express.json());
app.use(routes)


app.listen(3333, () => {
  console.log('Server started on port 3333!');
});

// 38m40s instalando insomnia para testar rota de feedbacks