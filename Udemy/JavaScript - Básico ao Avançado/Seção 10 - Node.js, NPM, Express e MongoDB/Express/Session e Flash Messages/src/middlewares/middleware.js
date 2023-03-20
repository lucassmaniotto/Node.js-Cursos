
// Middlewares são correntemente usados para validar dados de entrada,
// autenticação, etc.
// Middlewares são executados antes de qualquer rota.
// Middlewares podem ser usados para interceptar e modificar dados de
// requisição e resposta.
// Middlewares podem ser usados para executar código depois de uma rota
// e antes de uma resposta ser enviada.

exports.globalMiddleware = (req, res, next) => {
    if(req.body.name === '') {
        console.log('Empty name');
        return res.status(400).send('Empty name - 400: Bad Request');
    } else {
        console.log(`Welcome ${req.body.name}`);
    }
    next();
}