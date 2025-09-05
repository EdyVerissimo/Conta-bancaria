export class ContaController {
    // Coleção Array que armazenará os Objetos Conta
    listaContas = [];
    // não lembro
    numero = 0;
    //procura pelo numero da conta no array e devolve os dados dela
    procurarPorNumero(numero) {
        for (let conta of this.listaContas) {
            if (conta.numero === numero) {
                return conta;
            }
        }
        return null;
    }
    //mostrar contas cadastradas
    listarTodas() {
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
    cadastrar(conta) {
        this.listaContas.push(conta);
        console.log("\nA Conta foi cadastrada com sucesso!");
    }
    //att
    atualizar(conta) {
        let buscaConta = this.procurarPorNumero(conta.numero);
        if (buscaConta) {
            let indice = this.listaContas.indexOf(buscaConta);
            this.listaContas[indice] = conta;
            console.log(`\nA Conta número ${conta.numero} foi atualizada com sucesso!`);
        }
        else {
            console.log(`\nA Conta número ${conta.numero} não foi encontrada!`);
        }
    }
    //delet acc
    deletar(numero) {
        let buscaConta = this.procurarPorNumero(numero);
        if (buscaConta) {
            let indice = this.listaContas.indexOf(buscaConta);
            this.listaContas.splice(indice, 1); // splice remove o item do array
            console.log(`\nA Conta número ${numero} foi deletada com sucesso!`);
        }
        else {
            console.log(`\nA Conta número ${numero} não foi encontrada!`);
        }
    }
    //saque
    sacar(numero, valor) {
        let buscaConta = this.procurarPorNumero(numero);
        if (buscaConta) {
            if (buscaConta.sacar(valor) === true) {
                console.log(`\nO Saque na conta ${numero} foi efetuado com sucesso!`);
            }
        }
        else {
            console.log(`\nA Conta número ${numero} não foi encontrada!`);
        }
    }
    /// deposito
    depositar(numero, valor) {
        let buscaConta = this.procurarPorNumero(numero);
        if (buscaConta) {
            buscaConta.depositar(valor);
        }
        else {
            console.log(`\nA Conta número ${numero} não foi encontrada!`);
        }
    }
    //trasnferencia do cacau entre duas contas
    transferir(numeroOrigem, numeroDestino, valor) {
        let contaOrigem = this.procurarPorNumero(numeroOrigem);
        let contaDestino = this.procurarPorNumero(numeroDestino);
        if (contaOrigem && contaDestino) {
            if (contaOrigem.sacar(valor) === true) {
                contaDestino.depositar(valor);
                console.log("\nTransferência efetuada com sucesso!");
            }
        }
        else {
            console.log("\nConta de Origem e/ou Destino não foram encontradas!");
        }
    }
    /// adcionar uma conta no proxima memoria do array
    gerarNumero() {
        return ++this.numero;
    }
}
