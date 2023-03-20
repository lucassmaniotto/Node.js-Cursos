exports.homePage = (request, response) => {
    response.render('index');
}

exports.sendPage = (request, response) => {
    response.send(`
    <div class="container">
        <h1>Formulário</h1>
        <p>${request.body.name}, seu formulário foi enviado com sucesso! :)</p>
        <p>Entraremos em contato em breve com seu e-mail: <strong class='email'>${request.body.email}</strong></p>
        <a href="/">Voltar</a>
    </div>
    `);
}