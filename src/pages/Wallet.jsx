import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { fetchAPI, saveData, updateValueTotal } from '../redux/actions';
import Currency from '../components/Currency';
import PaymentMethod from '../components/PaymentMethod';
import CategoryExpenses from '../components/CategoryExpenses';
import DescriptionPayment from '../components/DescriptionPayment';
import HeaderWallet from '../components/HeaderWallet';
import TableWallet from '../components/TableWallet';

import '../styles/Wallet.css';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  /* sumWallet() {
    const { currencies } = this.props;
    let sum = 0;
    currencies.forEach((element) => {
      sum
      += Number(element.value) * Number(element.exchangeRates[element.currency].ask);
    });
    return sum;
  } */

  handleChange({ target }) {
    const { name } = target;
    const { value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { currencies, updateValueTotal: updateTotal } = this.props;
    let sum = 0;
    currencies.forEach((element) => {
      sum
      += Number(element.value) * Number(element.exchangeRates[element.currency].ask);
    });
    updateTotal(sum);

    const { saveData: save } = this.props;
    const { value, description, currency, method, tag, exchangeRates } = this.state;
    return (
      <>
        <HeaderWallet />
        <Form className="form">
          <DescriptionPayment
            value={ value }
            description={ description }
            handleChange={ this.handleChange }
          />
          <div className="separator" />
          <div className="form_inputs">
            <Currency value={ currency } handleChange={ this.handleChange } />
            <PaymentMethod value={ method } handleChange={ this.handleChange } />
            <CategoryExpenses value={ tag } handleChange={ this.handleChange } />
          </div>
          <Button
            type="button"
            variant="success"
            onClick={ () => save({ value,
              description,
              currency,
              method,
              tag,
              exchangeRates }) }
          >
            Adicionar despesa
          </Button>
        </Form>

        <TableWallet />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  currencies: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchAPI()),
  saveData: (payload) => dispatch(saveData(payload)),
  updateValueTotal: (payload) => dispatch(updateValueTotal(payload)),
});

Wallet.propTypes = {
  fetchCurrencies: propTypes.func.isRequired,
  saveData: propTypes.func.isRequired,
  updateValueTotal: propTypes.func.isRequired,
  currencies: propTypes.arrayOf(propTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
