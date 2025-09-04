import { Conta } from "./Conta.js";
export class ContaCorrente extends Conta {
    _limite;
    constructor(numero, agencia, tipo, titular, saldo, limite) {
        super(numero, agencia, tipo, titular, saldo);
        this._limite = limite;
    }
    get limite() {
        return this._limite;
    }
    set limite(limite) {
        this._limite = limite;
    }
    sacar(valor) {
        if (this.saldo + this._limite >= valor) {
            this.saldo -= valor;
            console.log(`\n Saque realizado com sucesso!`);
            return true;
        }
        console.log(`\n Saldo insuficiente para o saque!`);
        return false;
    }
    visualizar() {
        super.visualizar();
        console.log(`Limite da Conta Corrente: R$ ${this._limite.toFixed(2)}`);
    }
}
