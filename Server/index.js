const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool({
    
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'SUN_PDVlocal',
});

app.use(express.json());

app.use(cors()); //Usado para nao dar problemas ao conectar o frontend com o backend 

app.post("/cadastro", (req, res) => {
    const Nome = req.body.Nome;
    const Email = req.body.Email;
    const Senha = req.body.Senha;
    const Cargo = req.body.Cargo;
    

    db.query("SELECT * FROM login_sistema WHERE Email = ?", [Email], (err, res)  => {
       if(err){
        res.send(err);

       }
        res.send(result);
    });
});
app.listen(3001, () => {
    console.log("Rodando na porta 3001");
})
