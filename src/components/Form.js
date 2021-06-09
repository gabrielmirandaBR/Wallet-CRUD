import React, { Component } from 'react';
import CategoryExpenses from './CategoryExpenses';
import Currency from './Currency';
import DescriptionPayment from './DescriptionPayment';
import PaymentMethod from './PaymentMethod';

class Form extends Component {
  render() {
    return (
      <form>
        <DescriptionPayment />
        <Currency />
        <PaymentMethod />
        <CategoryExpenses />
      </form>
    );
  }
}

export default Form;
