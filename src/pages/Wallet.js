import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI, saveData } from '../actions';
import Currency from '../components/Currency';
import PaymentMethod from '../components/PaymentMethod';
import CategoryExpenses from '../components/CategoryExpenses';
import DescriptionPayment from '../components/DescriptionPayment';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.sumWallet = this.sumWallet.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  sumWallet() {
    const { currencies } = this.props;
    let sum = 0;
    currencies.forEach((element) => {
      sum
      += Number(element.value) * Number(element.exchangeRates[element.currency].ask);
    });
    return sum;
  }

  handleChange({ target }) {
    const { name } = target;
    const { value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { userEmail, saveData: save } = this.props;
    const { value, description, currency, method, tag, exchangeRates } = this.state;
    return (
      <>
        <header>
          <div>
            <span data-testid="email-field">{userEmail}</span>
          </div>
          <div>
            <span data-testid="total-field">{this.sumWallet()}</span>
          </div>
          <div>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </header>
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
  userEmail: propTypes.string.isRequired,
  fetchCurrencies: propTypes.func.isRequired,
  currencies: propTypes.arrayOf(propTypes.object).isRequired,
  saveData: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
