import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Form } from 'react-bootstrap';

import '../styles/DescriptionPayment.css';

class DescriptionPayment extends Component {
  render() {
    const { value, description, handleChange } = this.props;
    return (
      <section className="description">
        <Form.Group>
          <Form.Label htmlFor="expense">
            Valor
            <Form.Control
              type="number"
              id="expense"
              name="value"
              min="0"
              value={ value }
              onChange={ handleChange }
              placeholder="0.00"
            />
          </Form.Label>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="description">
            Descrição
            <Form.Control
              type="text"
              id="description"
              name="description"
              value={ description }
              maxLength="25"
              onChange={ handleChange }
              placeholder="Insira uma descrição"
            />
          </Form.Label>
        </Form.Group>
      </section>
    );
  }
}

DescriptionPayment.propTypes = {
  value: propTypes.number.isRequired,
  handleChange: propTypes.func.isRequired,
  description: propTypes.string.isRequired,
};

export default DescriptionPayment;
