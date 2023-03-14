const style = require('../style');

exports.homePage = (request, response) => {
    response.send(`
    <div class="container">
        <h1>Formulário</h1>
        <form action="/" method="POST">
            <div>
                <label for="name">Nome:</label>
                <input type="text" name="name" id="name">
                <label for="email">E-mail:</label>
                <input type="email" name="email" id="email">
                <button type="submit">Enviar</button>
            </div>
        </form>
        <a href="/contact">Contato</a>
    </div>
    `+ style);
}

exports.sendPage = (request, response) => {
    response.send(`
    <div class="container">
        <h1>Formulário</h1>
        <p>${request.body.name}, seu formulário foi enviado com sucesso! :)</p>
        <p>Entraremos em contato em breve com seu e-mail: <strong class='email'>${request.body.email}</strong></p>
        <a href="/">Voltar</a>
    </div>
    ` + style);
}