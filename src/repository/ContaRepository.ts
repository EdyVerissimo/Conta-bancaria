import { Conta } from "../model/Conta.js";

export interface ContaRepository {
  //CRUD (criar LER ATUALIZAR E DELETAR)
  procurarPorNumero(numero: number): void;
  listarTodas(): void;
  cadastrar(conta: Conta): void;
  atualizar(conta: Conta): void;
  deletar(numero: number): void;

  //Metodos de negocio
  sacar(numero: number, valor: number): void;
  depositar(numero: number, valor: number): void;
  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;
}
