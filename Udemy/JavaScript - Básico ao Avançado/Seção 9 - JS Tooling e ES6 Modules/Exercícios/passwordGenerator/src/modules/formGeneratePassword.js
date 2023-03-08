import generatePassword from "./generators";

const generatedPassword = document.querySelector(".password");
const charQuantity = document.querySelector(".quantity");
const uppercase = document.querySelector(".uppercase");
const lowercase = document.querySelector(".lowercase");
const numbers = document.querySelector(".numbers");
const symbols = document.querySelector(".symbols");
const btn = document.querySelector(".btn");

const checkboxes = [uppercase, lowercase, numbers, symbols];

export default () => {
    btn.addEventListener("click", () => {
        const flag = checkboxes.some((checkbox) => checkbox.checked);
        const password = generatePassword(
            charQuantity.value,
            uppercase.checked,
            lowercase.checked,
            numbers.checked,
            symbols.checked
        );

        if (flag) {
            if(charQuantity.value <= 25){
                generatedPassword.textContent = password;
            } else {
                alert("A quantidade de caracteres não pode ser maior que 25!");
            }
        } else {
            alert("Selecione algum tipo de caractere!");
        }
    });
};