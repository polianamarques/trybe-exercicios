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


//Shorthand 
//É exatamente essa repetição que a feature property shorthand elimina: podemos simplesmente substituir id: id por id que o Javascript entende que você quer atribuir o valor de id a uma propriedade com o mesmo nome que o parâmetro passado:

// const newUser = (id, name, email) => {
//     return {
//       id,
//       name,
//       email,
//     };
//   };
  
//   console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

const getPosition = (latitude, longitude) => ({
    latitude,
    longitude,
  });
  
  console.log(getPosition(-19.8157, -43.9542));

//Parametro Default 

// Caso não seja passado um valor para value ele agora assumirá o valor padrão de 1.
const multiply = (number, value = 1) => number * value;

console.log(multiply(8));
