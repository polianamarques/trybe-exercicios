let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for(index = 0;index < numbers.length;index +=1){
   (resultado += numbers[index])
   let valorFinal = resultado / 10;

if(valorFinal >= 20){
    console.log('valor maior que 20')
}else{
    console.log('valor menor que 20')
}
} 
