import { Conta } from "./model/Conta.js";
import * as readline from "readline-sync";

//declarar que digite é a variavel que chama entreda
const digite = require("readline-sync");

//
const conta1 = new Conta(1, 123, 1, "ECOLEITON RASTA", 2400);
const conta2 = new Conta(2, 124, 1, "Clovis bucetaldo da silva", 30000);

//para o case
let entrada = 0;


do {
    console.clear;
    console.log(`         *********************************
                Messi Bank — driblando burocracias, marcando conquistas.
                          *********************************
                    1 - Criar Conta
                    2 - Çostar todas as Contas
                    3 - Buscar Conta por Numero
                    4 - Atualizar Dados de conta
                    5 - Apagar Conta
                    6 - Sacar  Conta
                    8 - Transferir valores entre Contas
                    9 - sair`);
    
    entrada = digite.questionInt("Digite a opcao desejada : ");

    
                

}
while( != 9)
    console.log("saiu do programa");
