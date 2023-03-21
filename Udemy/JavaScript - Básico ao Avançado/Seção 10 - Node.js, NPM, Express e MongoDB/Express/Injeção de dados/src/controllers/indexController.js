exports.indexPage = (request, response) => {
    response.render('index', {
        title: 'Home',
        message: 'Welcome to the home page!'
    });
};

exports.postTreatment = (request, response) => {
    response.send(request.body);
};