import { Conta } from "../model/Conta.js";
import { ContaRepository } from "../repository/ContaRepository.js";



export class ContaController {
  private listaContas: Array<Conta> = [];
  public numero: number = 0

  procurarPorNumero(numero: number): void {
    throw new Error("Method not implemented.");
  }
  listarTodas(): void {
    throw new Error("Method not implemented.");
  }
  cadastrar(conta: Conta): void {
    throw new Error("Method not implemented.");
  }
  atualizar(conta: Conta): void {
    throw new Error("Method not implemented.");
  }
  sacar(numero: number, valor: number): void {
    throw new Error("Method not implemented.");
  }
  depositar(numero: number, valor: number): void {
    throw new Error("Method not implemented.");
  }
  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    throw new Error("Method not implemented.");
  }
}
