import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Button, Form } from 'react-bootstrap';
import { getEmail } from '../redux/actions';

import '../styles/Login.css';

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
    } else {
      this.setState({
        disabled: true,
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
      <section className="login">
        <img src="https://img.icons8.com/cotton/64/000000/coin-wallet--v1.png" alt="wallet" />
        <Form className="login_form">
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="email-input"
              placeholder="Insira seu email"
              id="email"
            />
          </Form.Group>
          <Form.Group style={ { margin: '0' } } className="form_password">
            <Form.Label htmlFor="password">Senha</Form.Label>
            <Form.Control
              name="password"
              type="password"
              value={ password }
              onChange={ this.handleChange }
              data-testid="password-input"
              placeholder="Insira sua senha"
              id="password"
            />
          </Form.Group>
          <Form.Text className="text-muted">
            A senha deve possuir seis caracteres ou mais.
          </Form.Text>
          <Button
            className="form_button"
            variant="success"
            type="button"
            disabled={ disabled }
            onClick={ this.addLogin }
          >
            Entrar
          </Button>
        </Form>
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
