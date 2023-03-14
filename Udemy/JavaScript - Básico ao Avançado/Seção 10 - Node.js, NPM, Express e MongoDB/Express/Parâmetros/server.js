const express = require('express');
const app = express();
const port = 3000;

const style = require('./style');

// o método urlencoded() faz com que o express entenda os dados enviados pelo formulário e faz o parse para um objeto
app.use(express.urlencoded({ extended: true }));

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

/* Params e Query vem da URL
    app.get('/test/:idUser?/:param?' , (request, response) => {
        console.log(request.params);
        console.log(request.query);
        response.send(request.query.name);
    }); 
*/

app.post('/send', (request, response) => {
    response.send(`
    <div class="container">
        <h1>Formulário</h1>
        <p>${request.body.name}, seu formulário foi enviado com sucesso! :)</p>
        <p>Entraremos em contato em breve com seu e-mail: <strong class='email'>${request.body.email}</strong></p>
        <a href="/">Voltar</a>
    </div>
    ` + style);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
