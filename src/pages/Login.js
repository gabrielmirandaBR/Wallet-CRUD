import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.addLogin = this.addLogin.bind(this);
  }

  async handleChange({ target: { value, name } }) {
    await this.setState({
      [name]: value,
    });

    const { email, password } = this.state;
    const arrEmail = email.split('');
    const numberOfPassword = 5;
    if (arrEmail.includes('@') === true && arrEmail.includes('.') === true
    && password.length > numberOfPassword && arrEmail[arrEmail.length - 1] !== '.') {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  addLogin() {
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { email, password, disabled, redirect } = this.state;
    if (!disabled && redirect) {
      return <Redirect to="/carteira" />;
    }

    return (
      <section>
        <div>
          <label htmlFor="email">
            <span>Email: </span>
            <input
              name="email"
              type="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="email-input"
              placeholder="alguem@alguem.com"
              id="email"
            />
          </label>

          <label htmlFor="password">
            <span>Senha: </span>
            <input
              name="password"
              type="password"
              value={ password }
              onChange={ this.handleChange }
              data-testid="password-input"
              placeholder="******"
              id="password"
            />
          </label>

          <button
            type="button"
            id="btn-enter"
            disabled={ disabled }
            onClick={ this.addLogin }
          >
            Entrar

          </button>
        </div>
      </section>
    );
  }
}

export default Login;
