import express from 'express';
import { routes } from './routes';
import cors from 'cors'

// iniciando aplicação
const app = express();

// controle de segurança no back-end (quais endereços podem consumir o back-end)
app.use(cors());
// express não entende json do body
app.use(express.json());
app.use(routes);


app.listen(3333, () => {
  console.log('Server started on port 3333!');
});

// 38m40s instalando insomnia para testar rota de feedbacks