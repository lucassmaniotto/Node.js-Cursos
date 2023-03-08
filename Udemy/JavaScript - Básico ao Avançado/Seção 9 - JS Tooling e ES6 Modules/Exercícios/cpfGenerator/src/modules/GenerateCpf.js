import CpfValidator from "./CpfValidator.js";

export default class GenerateCpf {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    generateNewCpf() {
        const cpfWithoutDigits = this.rand();
        const firstDigit = CpfValidator.generateDigit(cpfWithoutDigits);
        const secondDigit = CpfValidator.generateDigit(cpfWithoutDigits + firstDigit);
        const newCpf = cpfWithoutDigits + firstDigit + secondDigit;
        return this.formatCpf(newCpf);    
    }
    
    formatCpf(cpf) {
        return (
            cpf.slice(0, 3) +
            "." +
            cpf.slice(3, 6) +
            "." +
            cpf.slice(6, 9) +
            "-" +
            cpf.slice(9, 11)
        );
    }
}