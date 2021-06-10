import React, { Component } from 'react';
import propTypes from 'prop-types';

class DescriptionPayment extends Component {
  render() {
    const { value, description, handleChange } = this.props;
    return (
      <>
        <label htmlFor="expense">
          Valor:
          <input
            type="number"
            id="expense"
            name="value"
            value={ value }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            name="description"
            value={ description }
            onChange={ handleChange }
          />
        </label>
      </>
    );
  }
}

DescriptionPayment.propTypes = {
  value: propTypes.number.isRequired,
  handleChange: propTypes.func.isRequired,
  description: propTypes.string.isRequired,
};

export default DescriptionPayment;
