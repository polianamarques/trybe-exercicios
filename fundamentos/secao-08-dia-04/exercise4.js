//Escreva a função personLikes, que recebe como parâmetro os objetos alex ou gunnar. Cada objeto representa uma pessoa, e a função deve retornar todos os gostos daquela pessoa, conforme mostrado abaixo:
// name: nome da pessoa, age: idade, likes: gosta de, nationality: nacionalidade

const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
  };
  
  const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
  };
  
  // complete a assinatura da função abaixo
  const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
  

  console.log(personLikes(alex)); 
  console.log(personLikes(gunnar)); 

  
// const filterPeople = (array) => {
//     return array.filter((object)=> {
//       if(object.nationality === 'Australian' && object.bornIn >= 1901 && object.bornIn <= 2000) {
//         return object
//       }
//     } );
//   }
//   console.log(filterPeople(people))