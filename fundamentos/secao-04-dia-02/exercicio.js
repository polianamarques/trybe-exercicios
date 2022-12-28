// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for(let index = 0; index < numbers.length; index += 1){
//     console.log(numbers[index]);
// }



// somando os numeros de 1 a 100 


let number = [];
for (let index = 1; index <= 100; index += 1){
    number.push(index);
}
console.log(number); 

let sum = 0;
for (let i = 0; i < number.length; i += 1){
    sum += number[i];
}
console.log(sum);