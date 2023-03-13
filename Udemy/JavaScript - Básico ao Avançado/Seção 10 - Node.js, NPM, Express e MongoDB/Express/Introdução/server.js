const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send('<a go href="/about">O que é isso?</a>');
});

app.get('/about', (request, response) => {
    response.send('Essa página foi feita com Express :)<br><a go href="/">Voltar</a>');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
