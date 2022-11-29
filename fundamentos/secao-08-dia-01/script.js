const createEmail = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().replace(' ', '_');
    return {nomeCompleto, email:`${email}@trybe.com`};
  };
  // console.log(createEmail('Caroline Fernandes'));
  const newEmployees = (nameEmployee) => {
    const employees = {
      id1: nameEmployee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: nameEmployee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: nameEmployee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  console.log(newEmployees(createEmail));