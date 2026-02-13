export let transactions = [];

export function carregarTransactions (){ //carregar a informação do LocalStorafe no momento em que inicio
   const data = localStorage.getItem("transacoes"); 

   if(data) {
      transactions = JSON.parse(data); //parse - transforma texto em array 
   }
};

export function guardarTransactions (){
   localStorage.setItem("transacoes", JSON.stringify(transactions));  //stringify - transforma array em texto 

}
export function getTransactions(){
   return transactions;
};

export function addTransactions(novaTransacao){
   transactions.push(novaTransacao);
   guardarTransactions();
}; 



/*
OBJETIVO:
Centralizar o controle das transações em memória.

PENSAMENTO:

1) Carregar as transações salvas quando o sistema iniciar.
2) Criar função para:
   - Retornar lista atual.
   - Adicionar nova transação.
   - (Opcional) remover transação.
3) Sempre que alterar o estado:
   - Atualizar o localStorage.

REFLEXÃO:
- Por que não manipular o localStorage diretamente no UI?
- O que significa separar responsabilidade?

DESAFIO:
Como garantir que o array nunca fique fora de sincronia?
*/
