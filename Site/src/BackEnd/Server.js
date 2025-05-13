import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './Routes/Users.js';
import dotenv from 'dotenv';

// Configura variáveis de ambiente
dotenv.config();

// Cria a aplicação Express
const app = express();

// Configura middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.use('/api/users', userRoutes);

// Rota de teste
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'API funcionando' });
});

// Tratamento de erros 404
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint não encontrado' });
});

// Tratamento de erros globais
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erro interno no servidor' });
});

// Define a porta
const PORT = process.env.PORT || 3001;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});