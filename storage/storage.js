
const STORAGE_KEY = "transacoes";

export function saveTransactions(lista) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
}

export function loadTransactions() {
  const dados = localStorage.getItem(STORAGE_KEY);
  return dados ? JSON.parse(dados) : [];
}