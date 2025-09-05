import * as readline from "readline-sync";
import { ContaController } from "./controller/ContaController.js";
import { ContaCorrente } from "./model/ContaCorrente.js";
import { ContaPoupanca } from "./model/ContaPoupanca.js";

export function main() {
  // Instância da Classe ContaController
  const contas: ContaController = new ContaController();

  // Contas testes
  const cc1 = new ContaCorrente(
    contas.gerarNumero(),
    123,
    1,
    "LUIS INACIO LULA DA SILVA",
    13000,
    220
  );
  contas.cadastrar(cc1);
  const cp1 = new ContaPoupanca(
    contas.gerarNumero(),
    124,
    2,
    "JAIR MESSIAS BOLSONARO",
    22000,
    130
  );
  contas.cadastrar(cp1);

  // Menu principal, tentei fazer com crase e ficou todo feio perguntar ao professor pq'
  let opcao: number = 0;

  while (true) {
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("                    Messi bank                       ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Criar Conta                          ");
    console.log("            2 - Listar todas as Contas               ");
    console.log("            3 - Buscar Conta por Numero              ");
    console.log("            4 - Atualizar Dados da Conta             ");
    console.log("            5 - Apagar Conta                         ");
    console.log("            6 - Sacar                                ");
    console.log("            7 - Depositar                            ");
    console.log("            8 - Transferir valores entre Contas      ");
    console.log("            9 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");

    console.log("\n");
    opcao = readline.questionInt("Entre com a opcao desejada: ");

    if (opcao == 9) {
      console.log("\nBanco do Brazil com Z - O seu futuro começa aqui!");
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log("\nCriar Conta");

        let titular = readline.question("Digite o nome do Titular: ");
        let tipo: number;
        while (true) {
          tipo = readline.questionInt(
            "Digite o tipo da Conta (1-CC ou 2-CP): "
          );
          if (tipo === 1 || tipo === 2) break;
          console.log(
            "Tipo inválido! Digite 1 para Conta Corrente ou 2 para Conta Poupança."
          );
        }
        let saldo = readline.questionFloat("Digite o Saldo Inicial: ");

        if (tipo === 1) {
          let limite = readline.questionFloat(
            "Digite o Limite da Conta Corrente: "
          );
          contas.cadastrar(
            new ContaCorrente(
              contas.gerarNumero(),
              123,
              tipo,
              titular,
              saldo,
              limite
            )
          );
        } else {
          let aniversario = readline.questionInt(
            "Digite o dia do Aniversario da Conta Poupanca: "
          );
          contas.cadastrar(
            new ContaPoupanca(
              contas.gerarNumero(),
              124,
              tipo,
              titular,
              saldo,
              aniversario
            )
          );
        }

        break;
      case 2:
        console.log("\nListar todas as Contas");
        contas.listarTodas();
        break;
      case 3:
        console.log("\nBuscar Conta por número");
        let numeroBusca = readline.questionInt("Digite o numero da conta: ");
        contas.procurarPorNumero(numeroBusca);
        break;
      case 4:
        console.log("\nAtualizar dados da Conta");

        let numeroAtualiza = readline.questionInt("Digite o numero da conta: ");
        let contaAtualizar = contas.procurarPorNumero(numeroAtualiza);

        if (contaAtualizar) {
          let novoTitular = readline.question(
            "Digite o novo nome do Titular: "
          );
          let novoSaldo = readline.questionFloat("Digite o novo Saldo: ");
          contaAtualizar.titular = novoTitular;
          contaAtualizar.saldo = novoSaldo;
          console.log("\nConta atualizada com sucesso!");
          contaAtualizar.visualizar();
        } else {
          console.log("\nConta não encontrada!");
        }
        break;
      case 5:
        console.log("\nApagar Conta");
        let numeroApagar = readline.questionInt("Digite o numero da conta: ");
        contas.deletar(numeroApagar);
        break;
      case 6:
        console.log("\nSacar");
        let numeroSaque = readline.questionInt("Digite o numero da conta: ");
        let valorSaque = readline.questionFloat("Digite o valor do saque: ");
        contas.sacar(numeroSaque, valorSaque);
        break;
      case 7:
        console.log("\nDepositar");
        let numeroDeposito = readline.questionInt("Digite o numero da conta: ");
        let valorDeposito = readline.questionFloat(
          "Digite o valor do deposito: "
        );
        contas.depositar(numeroDeposito, valorDeposito);
        break;
      case 8:
        console.log("\nTransferir");
        let numeroOrigem = readline.questionInt(
          "Digite o numero da conta de Origem: "
        );
        let numeroDestino = readline.questionInt(
          "Digite o numero da conta de Destino: "
        );
        let valorTransfer = readline.questionFloat(
          "Digite o valor da transferencia: "
        );
        contas.transferir(numeroOrigem, numeroDestino, valorTransfer);
        break;
      default:
        console.log("\nOpção Inválida!");
        break;
    }

    readline.question("\nPressione ENTER para continuar...");
  }
}

// Executa a função principal
main();
