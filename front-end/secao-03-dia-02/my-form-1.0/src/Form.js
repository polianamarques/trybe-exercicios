import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state ={
            email:'',
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
    this.setState({
      email: event.target.value,
    });
  }
    render() {
        const { email } = this.state;
        return (
            <div>
                <form>
                    <label htmlFor='name'>
                        Nome:
                        <input
                         id='name'
                         name='name'
                         type="text"
                        />
                    </label>
         <label htmlFor="email">
            Email:
            <input
              id="email"
              name="email"
              type="email"
            />
          </label>
          <label htmlFor="age">
            Idade:
            <select
              id="age"
              name="age"
              defaultValue=""
            >
              <option value="">Selecione</option>
              <option value="adult">Maior que 18</option>
              <option value="underage">Menor que 18</option>
            </select>
          </label>

          <label htmlFor="anecdote">
            Anedota:
            <textarea id="anecdote" name="anecdote" />
          </label>
                </form>
            </div>
        );
    }
}

export default Form;