export default function generatePassword(length, uppercase, lowercase, numbers, symbols){
    const password = [];
    length = Number(length);
    
    for(let i = 0; i < length; i++){
        uppercase && password.push(generateUpperCase());
        lowercase && password.push(generateLowerCase());
        numbers && password.push(generateNumber());
        symbols && password.push(generateSymbol());
    }

    return password.join('').slice(0, length);
}

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateUpperCase = () => String.fromCharCode(rand(65, 90));

const generateLowerCase = () => String.fromCharCode(rand(97, 123));

const generateNumber = () => String.fromCharCode(rand(48, 57));

const generateSymbol = () => {
    const symbols = [
        String.fromCharCode(rand(33, 47)),
        String.fromCharCode(rand(58, 64)),
        String.fromCharCode(rand(91, 96)),
        String.fromCharCode(rand(123, 126)),
        String.fromCharCode(rand(128, 255)),
    ];

    return symbols[rand(0, symbols.length - 1)];
};