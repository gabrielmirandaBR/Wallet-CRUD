import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Form } from 'react-bootstrap';

class PaymentMethod extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <Form.Group>
        <Form.Label htmlFor="payment">
          Pagamento
          <select
            className="form-control"
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
        </Form.Label>
      </Form.Group>
    );
  }
}

PaymentMethod.propTypes = {
  value: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};

export default PaymentMethod;
