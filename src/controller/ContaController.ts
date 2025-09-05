import { Conta } from "../model/Conta.js";
import { ContaCorrente } from "../model/ContaCorrente.js";
import { ContaPoupanca } from "../model/ContaPoupanca.js";

export class ContaController {
  // Coleção Array que armazenará os Objetos Conta
  private listaContas: Array<Conta> = [];

  // não lembro
  public numero: number = 0;

  //procura pelo numero da conta no array e devolve os dados dela
  public procurarPorNumero(numero: number): Conta | null {
    for (let conta of this.listaContas) {
      if (conta.numero === numero) {
        return conta;
      }
    }
    return null;
  }

  //mostrar contas cadastradas
  public listarTodas(): void {
    if (this.listaContas.length === 0) {
      console.log("\nNão há contas cadastradas.");
      return;
    }

    for (let conta of this.listaContas) {
      conta.visualizar();
      console.log("-------------------------------------");
    }
  }

  //adcionar conta
  public cadastrar(conta: Conta): void {
    this.listaContas.push(conta);
    console.log("\nA Conta foi cadastrada com sucesso!");
  }

  //att
  public atualizar(conta: Conta): void {
    let buscaConta = this.procurarPorNumero(conta.numero);

    if (buscaConta) {
      let indice = this.listaContas.indexOf(buscaConta);
      this.listaContas[indice] = conta;
      console.log(
        `\nA Conta número ${conta.numero} foi atualizada com sucesso!`
      );
    } else {
      console.log(`\nA Conta número ${conta.numero} não foi encontrada!`);
    }
  }

  //delet acc
  public deletar(numero: number): void {
    let buscaConta = this.procurarPorNumero(numero);

    if (buscaConta) {
      let indice = this.listaContas.indexOf(buscaConta);
      this.listaContas.splice(indice, 1); // splice remove o item do array
      console.log(`\nA Conta número ${numero} foi deletada com sucesso!`);
    } else {
      console.log(`\nA Conta número ${numero} não foi encontrada!`);
    }
  }

  //saque
  public sacar(numero: number, valor: number): void {
    let buscaConta = this.procurarPorNumero(numero);

    if (buscaConta) {
      if (buscaConta.sacar(valor) === true) {
        console.log(`\nO Saque na conta ${numero} foi efetuado com sucesso!`);
      }
    } else {
      console.log(`\nA Conta número ${numero} não foi encontrada!`);
    }
  }

  /// deposito

  public depositar(numero: number, valor: number): void {
    let buscaConta = this.procurarPorNumero(numero);

    if (buscaConta) {
      buscaConta.depositar(valor);
    } else {
      console.log(`\nA Conta número ${numero} não foi encontrada!`);
    }
  }

  //trasnferencia do cacau entre duas contas

  public transferir(
    numeroOrigem: number,
    numeroDestino: number,
    valor: number
  ): void {
    let contaOrigem = this.procurarPorNumero(numeroOrigem);
    let contaDestino = this.procurarPorNumero(numeroDestino);

    if (contaOrigem && contaDestino) {
      if (contaOrigem.sacar(valor) === true) {
        contaDestino.depositar(valor);
        console.log("\nTransferência efetuada com sucesso!");
      }
    } else {
      console.log("\nConta de Origem e/ou Destino não foram encontradas!");
    }
  }

  /// adcionar uma conta no proxima memoria do array
  public gerarNumero(): number {
    return ++this.numero;
  }
}
