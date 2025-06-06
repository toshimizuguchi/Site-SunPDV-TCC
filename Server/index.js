const express = require('express');
const sql = require('mssql');

const app = express();
app.use(express.json());

// Configuração do SQL Server
const dbConfig = {
    server: 'localhost',
    database: 'SUN_PDVlocal',
    port: 1433,
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};



// Testando a conexão
sql.connect(dbConfig)
    .then(() => console.log("✅ Conectado ao SQL Server!"))
    .catch(err => console.error("❌ Erro na conexão:", err));

// Endpoint para cadastrar usuário
app.post('/cadastro', async (req, res) => {
    const { nome, email, senha, cargo } = req.body;
    
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('nome', sql.VarChar, nome)
            .input('email', sql.VarChar, email)
            .input('senha', sql.VarChar, senha)
            .input('cargo', sql.Int, cargo) // Cargo está referenciado na tabela
            .query("INSERT INTO login_sistema (Nome, Email, Senha, ID_Cargo) VALUES (@nome, @email, @senha, @cargo)");

        res.json({ mensagem: "Cadastro realizado com sucesso!" });
    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        res.status(500).json({ erro: "Erro ao cadastrar!" });
    }
});

app.listen(1433, () => {
    console.log("🔥 Servidor rodando na porta 1433");
});
