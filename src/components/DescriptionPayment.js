import React, { Component } from 'react';

export default class DescriptionPayment extends Component {
  render() {
    return (
      <>
        <label htmlFor="expense">
          Valor:
          <input type="number" id="expense" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" />
        </label>
      </>
    );
  }
}
