const express = require('express');
const sql = require('mssql');

const app = express();
app.use(express.json());

// Configuração do SQL Server
const dbConfig = {
    user: 'admintoshi1',
    password: 'SunPDV123',
    server: 'localhost', // ou '127.0.0.1'
    database: 'SUN_PDVlocal',
    options: {
        encrypt: false,
        trustServerCertificate: true
        // instanceName: 'SQLEXPRESS' // descomente se necessário
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
        const conn = await sql.connect(dbConfig);
        const result = await conn.request()
            .input('nome', sql.VarChar, nome)
            .input('email', sql.VarChar, email)
            .input('senha', sql.VarChar, senha)
            .input('cargo', sql.Int, cargo)
            .query("INSERT INTO login_sistema (Nome, Email, Senha, ID_Cargo) VALUES (@nome, @email, @senha, @cargo)");

        res.json({ mensagem: "Cadastro realizado com sucesso!" });
    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        res.status(500).json({ erro: "Erro ao cadastrar!" });
    }
});

// Porta do servidor
app.listen(3000, () => {
    console.log("🔥 Servidor rodando na porta 3000!");
});
