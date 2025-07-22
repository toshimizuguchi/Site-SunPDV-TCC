const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Configuração do banco de dados SQL Server
const dbConfig = {
  server: 'localhost',
  database: 'SUN_PDVlocal',
  options: {
    encrypt: false,
    trustServerCertificate: true,
    
  },
  authentication: {
    type: 'ntlm',
    options: {
      domain: 'DESKTOP-0EGRTF5',
      userName: '',
      password: ''
    }
  }
};


// Testa conexão ao iniciar
sql.connect(dbConfig)
  .then(() => console.log("✅ Conectado ao SQL Server!"))
  .catch(err => console.error("❌ Erro na conexão:", err));

// Endpoint para cadastro de usuário
app.post('/cadastro', async (req, res) => {
  const { nome, email, senha, cargo } = req.body;

  try {
    const pool = await sql.connect(dbConfig);

    await pool.request()
      .input('nome', sql.VarChar, nome)
      .input('email', sql.VarChar, email)
      .input('senha', sql.VarChar, senha)
      .input('cargo', sql.Int, cargo)
      .query("INSERT INTO login_sistema (Nome, Email, Senha, ID_Cargo) VALUES (@nome, @email, @senha, @cargo)");

    res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" });
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    res.status(500).json({ erro: "Erro ao cadastrar usuário." });
  }
});

// Inicia o servidor
app.listen(3000, () => {
  console.log("🔥 Servidor rodando na porta 3000!");
});
