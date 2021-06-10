import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI, saveData } from '../actions';
import Currency from '../components/Currency';
import PaymentMethod from '../components/PaymentMethod';
import CategoryExpenses from '../components/CategoryExpenses';
import DescriptionPayment from '../components/DescriptionPayment';
import HeaderWallet from '../components/HeaderWallet';
import TableWallet from '../components/TableWallet';

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
    const { saveData: save } = this.props;
    const { value, description, currency, method, tag, exchangeRates } = this.state;
    return (
      <>
        <HeaderWallet />
        <form>
          <DescriptionPayment
            value={ value }
            description={ description }
            handleChange={ this.handleChange }
          />
          <Currency value={ currency } handleChange={ this.handleChange } />
          <PaymentMethod value={ method } handleChange={ this.handleChange } />
          <CategoryExpenses value={ tag } handleChange={ this.handleChange } />
        </form>

        <button
          type="button"
          onClick={ () => save({ value,
            description,
            currency,
            method,
            tag,
            exchangeRates }) }
        >
          Adicionar despesa
        </button>
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
});

Wallet.propTypes = {
  fetchCurrencies: propTypes.func.isRequired,
  saveData: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
