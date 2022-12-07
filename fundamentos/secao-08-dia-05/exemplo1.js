const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}
// sum(primeNumbers[0], primeNumbers[2]) // 54

const [firstNumber, secondNumber, thirdNumber] = primeNumbers;

sum(firstNumber,thirdNumber);

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

[comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
console.log(comida, animal, bebida); // arroz gato água

//Ajuste a função getNationality para que a chamada getNationality(person) retorne João is Brazilian.


const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};
;
console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));