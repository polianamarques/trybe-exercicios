import React from 'react'; 
import './App.css';

// ...
function handleButtonOne() {
  console.log('Clicou no botão 1!');
}

function handleButtonTwo() {
  console.log('Clicou no botão 2!');
}

function handleButtonThree() {
  console.log('Clicou no botão 3!');
}
// ...

class App extends React.Component {
  render() {
    return (
      <div>
        <button>
          onClick={handleButtonOne} Botao 
        </button>
        <button>
          onClick={handleButtonTwo} Botao
        </button>
        <button>
          onClick={handleButtonThree} Botao
        </button>
      </div>
    );
  }
}



export default App;
