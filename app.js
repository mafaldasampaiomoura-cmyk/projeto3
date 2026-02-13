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

import {transactions, carregarTransactions, guardarTransactions, getTransactions, addTransactions} from "./transactions/transactions.js";
import { renderTransactions, atualizacaoCards } from "./UserInterface/userInterface.js";

carregarTransactions(); 
renderTransactions();
atualizacaoCards();


botao.addEventListener("click", () => {
    const descricao = document.querySelector("#descricao");
    const quanTipo = document.querySelector("#quantidade");
    const tipo = document.querySelector("#tipo-transacao"); 

    const descricaoValor = descricao.value; // a variável tem de guardar o elemento, não o texto. 
    const quanTipoValor = quanTipo.value; 
    const tipoValor = tipo.value; 

    const valorNumero = Number(quanTipo);

    if (descricao.trim() === "" || quanTipo.trim() === "" || tipo.trim() === ""){
        alert("Por favor, preencha os dados!")
        return;
    }

    if(Number.isNaN(valorNumero) || valorNumero <= 0){
        alert("Por favor, insira um valor válido!");
        return; // para ele parar e não continuar. Sem este return ele deixava que eu continuasse a preencher em branco ou com valores não válidos 
    }

    const novaTransacao = { // tem de ser criado aqui dentro porque ele depende de coisas em que eu vou clicar. Ou seja, eu preencho e depois crio a nova Transação para ficar guardado 
        id: Date.now(), 
        descricao: descricao, 
        valor: valorNumero, 
        tipo: tipo, 
        data: new Date().toLocaleDateString("pt-PT"),
    }

    addTransactions(novaTransacao); //aqui estou a guardar o objeto que criei no array.
    renderTransactions(); // faz a renderização 
    atualizacaoCards(getTransactions());

    //Apagar os inputs 

    descricao.value=""; //responsáveis por apagar os inputs 
    quanTipo.value=""; 
    tipo.value=""; 
});


