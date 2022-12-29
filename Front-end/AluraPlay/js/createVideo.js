import { apiConection } from "./apiConection.js";

const form = document.querySelector('[data-form]');

async function createVideo(event) {
    event.preventDefault();

    const title = document.querySelector('[data-title]').value;
    const url = document.querySelector('[data-url]').value;
    const image = document.querySelector('[data-image]').value;
    const description = Math.floor(Math.random() * 10).toString();

    await apiConection.createVideo(title, description, url, image);

    window.location.href = "../pages/envio-concluido.html";
}

form.addEventListener('submit', event => createVideo(event));