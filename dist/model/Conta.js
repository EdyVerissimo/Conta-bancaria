//Definição dos atributos da minha classe conta
export class Conta {
    _numero;
    _agencia;
    _tipo;
    _titular;
    _saldo;
    //Me esqueci (pesquisar o que é o contructor novamente)
    constructor(numero, agencia, tipo, titular, saldo) {
        this._numero = numero;
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;
    }
    //Getters e setters, servem pra visualizar(get) modificar(set) os atributos
    get numero() {
        return this._numero;
    }
    set numero(numero) {
        this._numero = numero;
    }
    get agencia() {
        return this._agencia;
    }
    set agencia(agencia) {
        this._agencia = agencia;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get titular() {
        return this._titular;
    }
    set titular(titular) {
        this._titular = titular;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(saldo) {
        this._saldo = saldo;
    }
    //Metodos de ação
    //sacar
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return true;
        }
        console.log("\n Saldo insuficiente para o Saque!");
        return false;
    }
    //deposi
    depositar(valor) {
        this._saldo += valor;
        console.log("\nDepósito realizado com sucesso!");
    }
    visualizar() {
        let tipoConta;
        switch (this._tipo) {
            case 1:
                tipoConta = "Conta corrente";
                break;
            case 2:
                tipoConta = "Conta poupanca";
            default:
                tipoConta = "tipo de conta Desconhecido";
        }
        console.log("\n*************************************");
        console.log("        Dados da Conta");
        console.log("*************************************");
        console.log(`Número da Conta: ${this._numero}`);
        console.log(`Agência: ${this._agencia}`);
        console.log(`Tipo da Conta: ${tipoConta}`);
        console.log(`Titular: ${this._titular}`);
        console.log(`Saldo: R$ ${this._saldo.toFixed(2)}`);
        console.log("****************************************");
    }
}
