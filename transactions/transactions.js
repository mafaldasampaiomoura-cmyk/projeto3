import { saveTransactions, loadTransactions } from "../storage/storage.js";
export let transactions = [];

export function carregarTransactions() {
  transactions = loadTransactions();
}

export function getTransactions(){
   return transactions;
};

export function addTransactions(novaTransacao) {
  transactions.push(novaTransacao);
  saveTransactions(transactions);
}

export function removeTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
  saveTransactions(transactions);
}

