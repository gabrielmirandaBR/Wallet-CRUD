import React, { Component } from 'react';
import propTypes from 'prop-types';

class PaymentMethod extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="payment">
        Método de pagamento:
        <select
          id="payment"
          name="method"
          value={ value }
          onChange={ handleChange }
        >
          <option>
            Dinheiro
          </option>
          <option>
            Cartão de crédito
          </option>
          <option>
            Cartão de débito
          </option>
        </select>
      </label>
    );
  }
}

PaymentMethod.propTypes = {
  value: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};

export default PaymentMethod;
