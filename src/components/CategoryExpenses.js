import React, { Component } from 'react';

class CategoryExpenses extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="category">
        Tag:
        <select id="category" name="tag" value={ value } onChange={ handleChange }>
          <option id="category">
            Alimentação
          </option>
          <option id="category">
            Lazer
          </option>
          <option id="category">
            Trabalho
          </option>
          <option id="category">
            Transporte
          </option>
          <option id="category">
            Saúde
          </option>
        </select>
      </label>
    );
  }
}

export default CategoryExpenses;
