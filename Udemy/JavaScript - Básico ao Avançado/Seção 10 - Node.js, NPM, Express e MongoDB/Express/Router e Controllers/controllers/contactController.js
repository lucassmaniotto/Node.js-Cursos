const style = require('../style');

exports.contactPage = (request, response) => {
    response.send(`
    <div class="container">
        <h1>Contato</h1>
        <p>Entre em contato conosco pelo e-mail: <strong class='email'>email@ficticio.com</strong></p>
        <a href="/">Voltar</a>
    </div>
    ` + style);
}