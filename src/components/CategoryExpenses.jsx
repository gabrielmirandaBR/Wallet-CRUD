import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Form } from 'react-bootstrap';

class CategoryExpenses extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <Form.Group>
        <Form.Label htmlFor="category">
          Tag
          <select
            className="form-control"
            id="category"
            name="tag"
            value={ value }
            onChange={ handleChange }
          >
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
        </Form.Label>
      </Form.Group>
    );
  }
}

CategoryExpenses.propTypes = {
  value: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};

export default CategoryExpenses;
