const express = require('express');
const app = express();
const port = 3000;

const style = require('./style');

app.get('/', (request, response) => {
    response.send(`
    <div class="container">
        <h1>Formulário</h1>
        <form action="/send" method="POST">
            <div>
                <label for="name">Nome:</label>
                <input type="text" name="name" id="name">
                <label for="email">E-mail:</label>
                <input type="email" name="email" id="email">
                <button type="submit">Enviar</button>
            </div>
        </form>
    </div>
    ` + style);
});

app.post('/send', (request, response) => {
    response.send(`
    <div class="container">
        <h1>Formulário</h1>
        <p>Formulário enviado com sucesso!</p>
        <a href="/">Voltar</a>
    </div>
    ` + style);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
