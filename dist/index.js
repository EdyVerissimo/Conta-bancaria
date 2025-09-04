import { Conta } from "./model/Conta.js";
//declarar que digite é a variavel que chama entreda
//
const conta1 = new Conta(1, 123, 1, "ECOLEITON RASTA", 2400);
const conta2 = new Conta(2, 124, 1, "Clovis bucetaldo da silva", 30000);
console.log("---------- DADOS INICIAIS ----------");
conta1.visualizar();
conta2.visualizar();
console.log("\n---------- REALIZANDO OPERAÇÕES ----------");
console.log("Depositando 1000 na conta 1...");
conta1.depositar(1000);
console.log("\nSacando 2000 da conta 2...");
conta2.sacar(2000);
console.log("\n---------- DADOS FINAIS ----------");
conta1.visualizar();
conta2.visualizar();
