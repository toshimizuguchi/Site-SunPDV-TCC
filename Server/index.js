// Importação das bibliotecas
const express = require('express');
const sql = require('mssql');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(cors());

// Configuração do banco de dados SQL Server
const dbConfig = {
  user: "",
  password: "",
  server: "",
  database: "",
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

// Testa a conexão ao iniciar o servidor
sql.connect(dbConfig)
  .then(() => console.log("✅ Conectado ao SQL Server!"))
  .catch(err => console.error("❌ Erro na conexão:", err));

// Endpoint de cadastro de usuário
app.post('/cadastro', async (req, res) => {
  const { nome, email, senha, cargo } = req.body;

  try {
    const saltRounds = 10;
    // Criptografa a senha antes de salvar
    const senhaHash = await bcrypt.hash(senha, saltRounds);
    const pool = await sql.connect(dbConfig);

    await pool.request()
      .input('nome', sql.VarChar, nome)
      .input('email', sql.VarChar, email)
      .input('senha', sql.VarChar, senhaHash)
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