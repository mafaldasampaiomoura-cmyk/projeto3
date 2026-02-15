
export function getTotalReceitas (lista){
   return lista.reduce((total, t) => { //para cada transação: se for receita soma se não devolve 
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