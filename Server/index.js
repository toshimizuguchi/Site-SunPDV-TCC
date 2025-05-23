const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'SUN_PDVlocal',
});

app.get('/', (req, res) => {
    db.query("INSERT INTO login_sistema ()")
})
app.listen(3001, () => {
    console.log("Rodando na porta 3001");
})
