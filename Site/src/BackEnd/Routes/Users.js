import { Router } from 'express';
import { executeQuery } from './db/connection.js';

const router = Router();

router.post('/register', async (req, res) => {
  const { nome, email, senha, cargo_id } = req.body;
  
  try {
    const query = `
      INSERT INTO usuarios (nome, email, senha_hash, cargo_id, data_cadastro)
      VALUES ('${nome}', '${email}', '${senha}', ${cargo_id}, GETDATE())
    `;
    
    await executeQuery(query);
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;