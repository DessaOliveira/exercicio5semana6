const express = require('express');
const app = express();
app.use(express.json());

app.get('/envia/:nome', (req, res) => {
    let nome = req.params.nome;
    res.send(`Rota de API criada pelo: ${nome}`);
    console.log(`Rota de API criada pelo: ${nome}`);
});


app.post('/enviaObjeto', (req, res) => {
    const object = req.body;
    res.json(object);
    console.log(`Enviado com sucesso ${JSON.stringify(object)}`);
});


app.listen(3333, () => {
    console.log("Servidor rodando");});