const express = require('express');
const app = express();
const mysql = express();

const db = mysql.createPool({
    
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: '',
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(3001, () => {
    console.log("Rodando na porta 3001");
})
