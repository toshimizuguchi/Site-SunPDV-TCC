import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './Routes/Users.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);

app.listen(3001, () => {
  console.log('API rodando na porta 3001');
});