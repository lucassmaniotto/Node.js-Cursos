exports.globalMiddleware = (req, res, next) => {
    if(req.body.name === '') {
        console.log('Empty name');
        return res.status(400).send('Empty name - 400: Bad Request');
    } else if(req.body.name) {
        console.log(`Welcome ${req.body.name}`);
    }
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && 'EBADCSRFTOKEN' === err.code) {
        return res.render('403')
    } else {
        next();
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}
