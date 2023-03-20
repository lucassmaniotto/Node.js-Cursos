const IndexModel = require('../models/IndexModel');

IndexModel.create({
        name: 'Teste',
        email: 'email@email.com',
        phone: '123456789'
    })
    .then(data => console.log(data))
    .catch((error) => console.log(error)
);

exports.indexPage = (request, response) => {
    response.render('index');
};

exports.postTreatment = (request, response) => {
    response.send(request.body);
};