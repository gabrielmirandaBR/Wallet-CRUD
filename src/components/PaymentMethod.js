import React, { Component } from 'react';

export default class PaymentMethod extends Component {
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
