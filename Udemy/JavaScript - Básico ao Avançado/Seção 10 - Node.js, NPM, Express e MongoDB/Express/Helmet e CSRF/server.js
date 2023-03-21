const express = require('express');
const app = express();
const helmet = require('helmet');
const csrf = require('csurf');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const port = 3000;
const routes = require('./routes');
const { globalMiddleware, checkCsrfError, csrfMiddleware } = require('./src/middlewares/globalMiddleware');

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(
  session({
    secret: 'your-secret',
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(csrf());
app.use(globalMiddleware);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
