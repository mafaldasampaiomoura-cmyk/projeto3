/*
OBJETIVO:
Conectar tudo. -- responsável por ligar tudo! 

PASSO A PASSO:

1) Capturar inputs do formulário.
2) Escutar clique do botão.
3) Validar dados.
4) Criar objeto transação.
5) Atualizar estado.
6) Re-renderizar UI.
7) Limpar formulário.

IMPORTANTE:
Sempre que adicionar uma transação:
- Atualizar lista
- Atualizar cards

Pergunta:
O que deve acontecer quando a página recarrega?
*/


const botao = document.querySelector(".adiciona-historia"); 
import { addTransactions, getTransactions, transactions } from "./transactions/transactions";

botao.addEventListener("click", () => {
    let descricao = document.querySelector("#descricao").value;
    let quanTipo = document.querySelector("#quantidade").value;
    let tipo = document.querySelector("#tipo-transacao").value; 

    const valorNumero = Number(quanTipo);

    if (descricao.trim() === "" || quanTipo.trim() === "" || tipo.trim() === ""){
        alert("Por favor, preencha o dado!")
    }

    if(Number.isNaN(valorNumero) || valorNumero <= 0){
        alert("Por favor, insira um valor válido!");
    }

    const novaTransacao = { // tem de ser criado aqui dentro porque ele depende de coisas em que eu vou clicar. Ou seja, eu preencho e depois crio a nova Transação para ficar guardado 
        id: Date.now(), 
        descricao: descricao, 
        valor: valorNumero, 
        tipo: tipo, 
        data: new Date().toLocaleDateString("pt-PT"),
    }

    addTransactions(novaTransacao); //aqui estou a guardar o objeto que criei no array. 
    console.log(getTransactions); 
});

