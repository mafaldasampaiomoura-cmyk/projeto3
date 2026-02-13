/*
OBJETIVO:
Calcular saldo total, total de receitas e total de despesas.

PENSAMENTO:

1) O saldo começa em 0.
2) Para cada transação:
   - Se for receita, soma.
   - Se for despesa, subtrai.
3) Para calcular totais separados:
   - Filtrar por tipo.
   - Somar valores.

DICA IMPORTANTE:
Use reduce().

Pergunta:
- O que é o acumulador?
- Qual deve ser o valor inicial?

Exemplo mental:
[100, -50, 200]
Resultado esperado: 250

Não escreva loops tradicionais.
*/

export function getTotalReceitas (lista){
   return lista.reduce ((total, t) => { //para cada transação: se for receita soma se não devolve 
      if(t.tipo === "receita"){
         return total + t.valor
      } else {
      return total; 
   }
}, 0);  
}; 

export function getTotalDespesas (lista){
   return lista.reduce ((total, t) => { //para cada transação: se for despesa subtrai se não devolve 
      if(t.tipo === "despesa"){
         return total + t.valor
      } else {
      return total; 
   }
}, 0);  
};

export function getSaldo (lista){
   return getTotalReceitas(lista) - getTotalDespesas(lista)
   
}