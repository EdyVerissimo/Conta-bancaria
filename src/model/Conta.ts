//Definição dos atributos da minha classe conta
export abstract class Conta {
  private _numero: number;
  private _agencia: number;
  private _tipo: number;
  private _titular: string;
  private _saldo: number;
  //Me esqueci (pesquisar o que é o contructor novamente)

  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number
  ) {
    this._numero = numero;
    this._agencia = agencia;
    this._tipo = tipo;
    this._titular = titular;
    this._saldo = saldo;
  }
  //Getters e setters, servem pra visualizar(get) modificar(set) os atributos

  public get numero() {
    return this._numero;
  }

  public set numero(numero: number) {
    this._numero = numero;
  }

  public get agencia() {
    return this._agencia;
  }

  public set agencia(agencia: number) {
    this._agencia = agencia;
  }

  public get tipo() {
    return this._tipo;
  }

  public set tipo(tipo: number) {
    this._tipo = tipo;
  }

  public get titular() {
    return this._titular;
  }

  public set titular(titular: string) {
    this._titular = titular;
  }

  public get saldo() {
    return this._saldo;
  }

  public set saldo(saldo: number) {
    this._saldo = saldo;
  }
  //Metodos de ação
  //sacar
  public sacar(valor: number): boolean {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return true;
    }
    console.log("\n Saldo insuficiente para o Saque!");
    return false;
  }
  //deposi
  public depositar(valor: number): void {
    this._saldo += valor;
    console.log("\nDepósito realizado com sucesso!");
  }

  public visualizar(): void {
    let tipoConta: string;
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
