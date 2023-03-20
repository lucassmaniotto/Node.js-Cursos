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

const port = 3000;
const routes = require('./routes');
const { globalMiddleware } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(globalMiddleware);
app.use(routes);

app.on('Ready', () => {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    })
});