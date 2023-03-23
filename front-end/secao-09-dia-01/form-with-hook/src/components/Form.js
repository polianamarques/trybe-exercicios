import React from 'react'; 
import { useState } from 'react';

function Form() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('');
    const [location, setLocation] = useState('');
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
   </form>
  )
}

export default Form;