import express from 'express';
import sql from 'mssql';
import crypto from 'crypto'; // 🔑 Aqui usamos o SHA-256 simples

const app = express();
app.use(express.json());

// rota de cadastro
app.post('/cadastro', async (req, res) => {
  const { nome, email, senha, cargo } = req.body;

  try {
    // Gerando o hash da senha com SHA-256
    const senhaHash = crypto.createHash('sha256').update(senha).digest('hex');

    // Inserindo no banco
    await pool.request()
      .input('nome', sql.VarChar, nome)
      .input('email', sql.VarChar, email)
      .input('senha', sql.VarChar, senhaHash)
      .input('cargo', sql.Int, cargo)
      .input('idPermissao', sql.Int, 1) // sempre ativo
      .query(`
        INSERT INTO login_sistema (Nome, Email, Senha, ID_Cargo, ID_Permissao) 
        VALUES (@nome, @email, @senha, @cargo, @idPermissao)
      `);
      
    res.json({ mensagem: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    res.status(500).json({ erro: 'Erro ao cadastrar usuário.' });
  }
});
