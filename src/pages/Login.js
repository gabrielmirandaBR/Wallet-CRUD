import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import getEmail from '../actions';

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
    this.verifyEmail = this.verifyEmail.bind(this);
    this.verifyPassword = this.verifyPassword.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });

    if (this.verifyEmail() && this.verifyPassword()) {
      this.setState({
        disabled: false,
      });
    }
  }

  verifyEmail() {
    const { email } = this.state;
    const arrEmail = email.split('');
    const isValid = arrEmail.includes('@') && arrEmail.includes('.')
    && arrEmail[arrEmail.length - 1] !== '.';

    return isValid;
  }

  verifyPassword() {
    const { password } = this.state;
    const numberOfPassword = 5;
    if (password.length >= numberOfPassword) {
      return true;
    }

    return false;
  }

  addLogin() {
    const { email } = this.state;
    this.setState({
      redirect: true,
    });

    const { getEmail: addEmail } = this.props;
    addEmail(email);
  }

  render() {
    const { email, password, disabled, redirect } = this.state;

    if (redirect) {
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

const mapDispatchToProps = (dispatch) => ({
  getEmail: (payload) => dispatch(getEmail(payload)),
});

Login.propTypes = {
  getEmail: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
