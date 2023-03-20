require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.DBCONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database');
        app.emit('Ready');
    })
    .catch(e => console.log(e)
);

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const port = 3000;
const routes = require('./routes');
const { globalMiddleware } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public'));

const sessionOptions = session({
    secret: 'segredo',
    store: MongoStore.create({ mongoUrl: process.env.DBCONNECTION }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(globalMiddleware);
app.use(routes);

app.on('Ready', () => {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    })
});