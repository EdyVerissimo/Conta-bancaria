import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  private _limite: number;

  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number,
    limite: number
  ) {
    super(numero, agencia, tipo, titular, saldo);
    this._limite = limite;
  }

  public get limite() {
    return this._limite;
  }

  public set limite(limite: number) {
    this._limite = limite;
  }

  public sacar(valor: number): boolean {
    if (this.saldo + this._limite >= valor) {
      this.saldo -= valor;
      console.log(`\n Saque realizado com sucesso!`);
      return true;
    }
    console.log(`\n Saldo insuficiente para o saque!`);
    return false;
  }

  public visualizar(): void {
    super.visualizar();
    console.log(`Limite da Conta Corrente: R$ ${this._limite.toFixed(2)}`);
  }
}
