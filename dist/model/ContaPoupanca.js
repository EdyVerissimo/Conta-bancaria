import { Conta } from "./Conta.js";
export class ContaPoupanca extends Conta {
    _aniversario;
    constructor(numero, agencia, tipo, titular, saldo, aniversario) {
        super(numero, agencia, tipo, titular, saldo);
        this._aniversario = aniversario;
    }
    get aniversario() {
        return this._aniversario;
    }
    set aniversario(aniversario) {
        this._aniversario = aniversario;
    }
    visualizar() {
        super.visualizar(); //mostrar o visualizar da classe conta
        console.log(`Aniversario da poupanca : ${this._aniversario}`);
    }
}
