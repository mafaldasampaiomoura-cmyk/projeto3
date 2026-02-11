export let transactions = [
   {id:1, descricao: "café", valor: 2, tipo: "despesa", data: new Date().toLocaleDateString("pt-PT")}, 
   {id:2, descricao: "salário", valor: 1000, tipo:"receita", data: new Date().toLocaleDateString("pt-PT")}
];

export function getTransactions(){
   return transactions;
}

export function addTransactions(novaTransacao){
   transactions.push(novaTransacao)
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
