import React, { Component } from 'react';
import Loading from './Loading';
// Crie uma aplicação que renderiza os dados de uma pessoa aleatória, que são obtidos por meio do retorno de uma API.

// A API utilizada será a randomuser no endereço https://api.randomuser.me/ que, ao ser acessada, entrega um objeto contendo um usuário aleatório e seus dados pessoais num array de nome results.
// Lembre-se que o seu componente deve fazer a requisição para a API por meio do método componentDidMount.

// Enquanto os dados não são entregues, uma div deve ser renderizada com o conteúdo Carregando…
// Após a entrega dos dados, seu componente deve ser renderizado exibindo foto, nome, email e idade do usuário.
// Caso a idade do usuário seja maior que 50, o componente não deve ser renderizado. Aplique esta lógica no método shouldComponentUpdate.


class App extends Component {
  constructor() {
    super();
   this.state = {
    pessoa: [],
    loading: true,
   } 
   this.fetchApi = this.fetchApi.bind(this);
  }


   async  fetchApi () {
     const api = await fetch(' https://api.randomuser.me/');
     const data = await api.json();
     const array = data.results;
     this.setState((prevState) => ({
      pessoa: [...prevState.pessoa, array ],
      loading: false,
     })
      )
   }
     

   componentDidMount() {
    this.fetchApi()
   }
  render() {
     const {loading} = this.state
      if(loading === true) return <Loading />
      return (
      <div>
       
      </div>
    );
  }
}

export default App;
