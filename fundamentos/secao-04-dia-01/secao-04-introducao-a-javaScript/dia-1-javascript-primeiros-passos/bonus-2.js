const custo = 7;
const valorDeVenda = 19; 

let valorCustoTotal;

if(custo >= 0 && valorDeVenda >= 0){
    let valorCustoTotal = custo + 1.4
         let lucro = (valorDeVenda - valorCustoTotal) * 1000;
         console.log(lucro)
} else {console.log('Erro!')};