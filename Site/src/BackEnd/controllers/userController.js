const { poolPromise, sql } = require('../db');

async function registerUser(req, res) {
  const { nome, email, senha, cargo_id } = req.body;

  if (!nome || !email || !senha || !cargo_id) {
    return res.status(400).json({ message: 'Preencha todos os campos obrigatórios.' });
  }

  try {
    const pool = await poolPromise;
    await pool.request()
      .input('nome', sql.NVarChar, nome)
      .input('email', sql.NVarChar, email)
      .input('senha', sql.NVarChar, senha) // Pode usar bcrypt se quiser proteger melhor
      .input('cargo_id', sql.Int, cargo_id)
      .query(`
        INSERT INTO Usuarios (nome, email, senha, cargo_id)
        VALUES (@nome, @email, @senha, @cargo_id)
      `);

    res.status(201).json({ message: 'Usuário cadastrado com sucesso.' });
  } catch (err) {
    console.error('Erro ao registrar usuário:', err);
    res.status(500).json({ message: 'Erro interno no servidor.' });
  }
}

module.exports = { registerUser };
