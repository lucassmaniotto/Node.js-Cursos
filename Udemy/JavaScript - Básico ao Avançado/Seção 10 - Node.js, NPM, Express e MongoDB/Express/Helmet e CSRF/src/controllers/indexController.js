exports.indexPage = (request, response) => {
    response.render('index');
};

exports.postTreatment = (request, response) => {
    response.send(request.body);
};