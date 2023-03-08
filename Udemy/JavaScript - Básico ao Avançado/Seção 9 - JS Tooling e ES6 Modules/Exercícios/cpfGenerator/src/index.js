import GenerateCpf from './modules/GenerateCpf.js';

import './assets/css/style.css';

(function() {
    const generate = new GenerateCpf();
    const btn = document.querySelector('.btn');
    const cpf = document.querySelector('.cpf');

    btn.addEventListener('click', handleClick);
    function handleClick() {
        cpf.innerHTML = generate.generateNewCpf();
    }

})();