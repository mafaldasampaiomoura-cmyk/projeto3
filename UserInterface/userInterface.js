/*
OBJETIVO:
Atualizar a interface sempre que o estado mudar.

PENSAMENTO:

1) Selecionar o container da lista.
2) Limpar o conteúdo antes de renderizar novamente.
3) Para cada transação:
   - Criar elemento HTML dinamicamente.
   - Inserir no DOM.
4) Atualizar os cards com os valores calculados.

REFLEXÃO:
- Por que limpar antes de renderizar?
- O que acontece se não limpar?

DESAFIO:
Como aplicar classes diferentes para receita e despesa?
*/
import { transactions } from "../transactions/transactions.js";
import { getTotalDespesas, getTotalReceitas, getSaldo } from "../calculations/calculations.js";

const listaTransacao = document.querySelector(".lista-transacoes");


export function renderTransactions() { //renderizar para aparecer na tela. É esta função que é responsável por isto. 
   let novaTransacao = ''; //acumular uma string no HTML. Esta variável é a mesma que tem de estar no forEach 

   transactions.forEach((t) => { //forEach percorre um array  // span para criar blocos //quando ele é chamado, a informação já existe lá 
      //span t.tipo vai ser responsável por garantir que se t.tipo for uma receita, vai colocar a etiqueta-receita. Se não mete a etiqueta despesa 
      // span tvalor vai colocar os valores ou como positivos ou como negativos
      novaTransacao = novaTransacao +
        `<div class = "transaction item-transacao" data-id="${t.id}" > 
            <span> ${t.descricao} </span>
            <span class="${t.tipo === "receita" ? "etiqueta-receita" : "etiqueta-despesa"}">${t.tipo}</span> 
            <span> ${t.data} </span>
            <span>${t.tipo === "receita" ? "+" : "-"} ${Number(t.valor).toLocaleString("pt-PT", { style: "currency", currency: "EUR" })}</span>
            <button class="btn-remover" title="Remover">✕</button>

        </div>`;
    })

   listaTransacao.innerHTML= novaTransacao; //meter a lista dentro do meu container 
}


export function atualizacaoCards (lista){ //Recebo a lista, calculo os 3 números e meto-os nos cards 
   const saldoValor = document.querySelector("#saldoValor");  //vou buscar ao documento do index onde é que estão os cards. 
   const  receitasValor = document.querySelector("#receitasValor"); 
   const despesasValor = document.querySelector("#despesasValor"); 

   const saldo = getSaldo(lista); //chamo as funções que vou precisar de trabalhar para fazer que ele pegue nas funções que eu fiz. 
   const receita = getTotalReceitas(lista); 
   const despesa = getTotalDespesas(lista);

   saldoValor.textContent = saldo //escrevo no texto/dashboard, o cálculo do  que eu preciso 
   receitasValor.textContent = receita; 
   despesasValor.textContent = despesa; 
}