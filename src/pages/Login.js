import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <section>
        <div>
          <label htmlFor="email">
            <span>Email: </span>
            <input type="email" data-testid="email-input" id="email" />
          </label>

          <label htmlFor="password">
            <span>Senha: </span>
            <input type="password" data-testid="password-input" id="password" />
          </label>

          <button type="button">Entrar</button>
        </div>
      </section>
    );
  }
}

export default Login;
