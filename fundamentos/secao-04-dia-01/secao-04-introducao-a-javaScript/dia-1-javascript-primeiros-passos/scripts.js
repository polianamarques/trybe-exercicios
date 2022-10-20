// // // Exercicio 1
// const a = 27;
// const b = 33;
// const c = 28;

//  console.log(a + b);
//  console.log(a-b);
//  console.log(a*b);
//  console.log(a/b);
//  console.log(a%b);
  
// // Exercicio 2 
// if(a > b){
//     console.log("A é maior que B")
// } else {
//     console.log('B é maior que A')
// };

// // Exercicio 3 
// if(a > b && a > c){
//     console.log('O maior numero é A')
// } else if(b > a && b > c){
//     console.log('O maior numero é B')
// } else {
//     console.log('O maior numero é C')
// }

// // Exercicio 4 
// if(a > 0){
//     console.log('positive')
// } else if(a < 0){
//     console.log('negative')
// } else{
//     console.log('zero')
// }

// Exercicio 5 

// let anguloA = 80
// let anguloB = 30
// let anguloC =70

// if(anguloA + anguloB + anguloC === 180){
//     console.log(true)
// } else if(anguloA + anguloB + anguloC !== 180){
//     console.log(false)
// } else {
//     console.log('ERRO! Contem algum ângulo inválido')
// }
let pecaDeXadrez = 'rainha';

switch(pecaDeXadrez.toLowerCase()){
case 'torre': 
    console.log('Anda apenas na horizontal e na vertical');
    break
 case 'rei':
    console.log('Anda apenas 1 casa em qualquer direcao');
    break
case 'rainha': 
    console.log ('Anda em todas as direcoes, horizontal, vertical e diagonal');
    break
    default: 
    console.log('Erro!Peça invalida');
};