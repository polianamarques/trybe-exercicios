import React from 'react'; 
import { useState } from 'react';

function Form() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('');
    const [location, setLocation] = useState('');
    const [module, setModule] = useState();
  return (
   <form>
    <fieldset>
        <legend>Dados Pessoais</legend>
         {/* input do tipo text contendo o nome completo; */}
        <label htmlFor='name'>
            Nome 
            <input
            type="text"
            value={name}
            onChange={({target})=> setName(target.value)}
            />
        </label>
        <label htmlFor='age'>
            Idade
            <input
            type="number"
            value={age}
            onChange={({target})=> setAge(target.value)}
            />
        </label>
        <label htmlFor='location'>
           Localizacao 
            <input
            type="text"
            value={location}
            onChange={({target})=> setLocation(target.value)}
            />
        </label>
    </fieldset>
    <fieldset>
    <legend>Módulo</legend>
        <label htmlFor="fundamentals">
          Fundamentos
          <input
            type="radio"
            id="fundamentals"
            name="module"
            value="Fundamentos"
            checked={module === 'Fundamentos'}
            onChange={({ target }) => setModule(target.value)}
            />
            </label>
            <br />
        <label htmlFor="frontend">
          Front-end
          <input
            type="radio"
            id="frontend"
            name="module"
            value="Front-end"
            checked={module === 'Front-end'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <br />
        <label htmlFor="backend">
          Back-end
          <input
            type="radio"
            id="backend"
            name="module"
            value="Back-end"
            checked={module === 'Back-end'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <br />
        <label htmlFor="cs">
          Ciência da computação
          <input
            type="radio"
            id="cs"
            name="module"
            value="Ciência da computação"
            checked={module === 'Ciência da computação'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
    </fieldset>
    <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          console.log('Click!');
        }}
      >
        Enviar
      </button>
   </form>

  )
}

export default Form;