import React, { Component } from 'react';

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

export default DescriptionPayment;
