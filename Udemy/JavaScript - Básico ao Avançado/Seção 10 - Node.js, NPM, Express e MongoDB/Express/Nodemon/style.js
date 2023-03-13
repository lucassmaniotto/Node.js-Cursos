const style = `
<style>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');
    :root {
    --primary-color: rgb(17, 86, 102);
    --primary-color-darker: rgb(9, 48, 56);
    }

    * {
    box-sizing: border-box;
    outline: 0;
    }

    body {
    margin: 0;
    padding: 0;
    background: var(--primary-color);
    font-family: 'Open sans', sans-serif;
    font-size: 1.3em;
    line-height: 1.5em;
    }

    .container {
    max-width: 640px;
    margin: 50px auto;
    background: #fff;
    padding: 10px;
    border-radius: 10px;
    }

    a {
    color: var(--primary-color);
    text-decoration: none;
    }

    form {
        width: 50%;
        margin: 0 auto;
    }

    form div {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    button {
        background: var(--primary-color);
        color: #fff;
        border: 0;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        margin-top: 10px;
    }

    button:hover {
        background: var(--primary-color-darker);
    }

    input {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-top: 5px;
    }
</style>
`
module.exports = style;