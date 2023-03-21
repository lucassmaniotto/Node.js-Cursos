exports.globalMiddleware = (req, res, next) => {
    res.locals.localVariable = 'This is a local variable';
    next();
}