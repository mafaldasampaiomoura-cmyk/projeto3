const botao = document.querySelector(".adiciona-historia"); 
const botoesCategoria = document.querySelectorAll(".categorias");
const inputDescricao = document.querySelector("#descricao");


import {transactions, carregarTransactions, getTransactions, addTransactions, removeTransaction} from "./transactions/transactions.js";
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

    const valorNumero = Number(quanTipoValor);

    if (descricaoValor.trim() === "" || quanTipoValor.trim() === "" || tipoValor.trim() === ""){
        alert("Por favor, preencha os dados!")
        return;
    }

    if(Number.isNaN(valorNumero) || valorNumero <= 0){
        alert("Por favor, insira um valor válido!");
        return; // para ele parar e não continuar. Sem este return ele deixava que eu continuasse a preencher em branco ou com valores não válidos 
    }

    const novaTransacao = { // tem de ser criado aqui dentro porque ele depende de coisas em que eu vou clicar. Ou seja, eu preencho e depois crio a nova Transação para ficar guardado 
        id: Date.now(), 
        descricao: descricaoValor, 
        valor: valorNumero, 
        tipo: tipoValor, 
        data: new Date().toLocaleDateString("pt-PT"),
    }

    addTransactions(novaTransacao); //aqui estou a guardar o objeto que criei no array.
    renderTransactions(); // faz a renderização 
    atualizacaoCards();

    //Apagar os inputs 

    descricao.value=""; //responsáveis por apagar os inputs 
    quanTipo.value=""; 
    tipo.value="receita"; 
});

botoesCategoria.forEach((botao) => { //para colocar os botões a funcionarem na parte da inserção
  botao.addEventListener("click", () => {
    inputDescricao.value = botao.textContent.trim();
  });
});
