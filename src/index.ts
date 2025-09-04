

import { ContaCorrente } from "./model/ContaCorrente.js";
import { ContaPoupanca } from "./model/ContaPoupanca.js";

// Instanciando um objeto da Classe ContaCorrente
const cc1 = new ContaCorrente(1, 123, 1, "João da Silva", 1000.00, 500.00);

// Instanciando um objeto da Classe ContaPoupanca
const cp1 = new ContaPoupanca(2, 123, 2, "Maria dos Anjos", 5000.00, 10);

console.log("--- CONTAS CRIADAS ---");
cc1.visualizar();
console.log("\n"); // Adiciona uma linha em branco
cp1.visualizar();

console.log("\n--- OPERAÇÕES ---");
console.log("\nSacando 1200 da Conta Corrente (usando o limite)...");
cc1.sacar(1200); // Saldo vai para -200
cc1.visualizar();

console.log("\nTentando sacar 400 da Conta Corrente (não vai conseguir)...");
cc1.sacar(400); // Saldo + limite (-200 + 500 = 300) é menor que 400
cc1.visualizar();