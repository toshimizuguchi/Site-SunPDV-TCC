const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Config do banco (ajuste com suas credenciais)
const dbConfig = {
    user: 'seu_usuario',
    password: 'sua_senha',
    server: 'localhost',
    database: 'SUN_PDVlocal',
    options: { encrypt: false }
};

// Rota de cadastro CORRIGIDA
app.post("/cadastro", async (req, res) => {
    const { Nome, Email, Senha, Cargo } = req.body;

    try {
        const pool = await sql.connect(dbConfig);
        
        // 1. Verifica se o email já existe
        const emailCheck = await pool.request()
            .input('Email', sql.VarChar, Email)
            .query('SELECT Email FROM login_sistema WHERE Email = @Email');

        if (emailCheck.recordset.length > 0) {
            return res.status(400).json({ error: "Email já cadastrado!" });
        }

        // 2. Insere o usuário com a coluna CORRETA (JD_Cargo)
        await pool.request()
            .input('Nome', sql.VarChar, Nome)
            .input('Email', sql.VarChar, Email)
            .input('Senha', sql.VarChar, Senha)
            .input('JD_Cargo', sql.Int, Cargo) // Usando JD_Cargo (como na tabela)
            .query(`
                INSERT INTO login_sistema (Nome, Email, Senha, JD_Cargo) 
                VALUES (@Nome, @Email, @Senha, @JD_Cargo)
            `);

        res.status(200).json({ message: "Cadastro realizado com sucesso!" });

    } catch (err) {
        console.error("Erro no cadastro:", err);
        res.status(500).json({ error: "Erro interno no servidor" });
    }
});

app.listen(3001, () => console.log("Servidor rodando na porta 3001"));