import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class HeaderWallet extends Component {
  constructor() {
    super();

    this.sumWallet = this.sumWallet.bind(this);
  }

  sumWallet() {
    const { currencies } = this.props;
    let sum = 0;
    currencies.forEach((element) => {
      sum
      += Number(element.value) * Number(element.exchangeRates[element.currency].ask);
    });
    return parseFloat(sum).toFixed(2);
  }

  render() {
    const { userEmail } = this.props;
    return (
      <header>
        <div>
          <span data-testid="email-field">{userEmail}</span>
        </div>
        <div>
          <span data-testid="total-field">{`R$ ${this.sumWallet()}`}</span>
          {' '}
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  currencies: state.wallet.expenses,
});

HeaderWallet.propTypes = {
  userEmail: propTypes.string.isRequired,
  currencies: propTypes.arrayOf(propTypes.object).isRequired,
};

export default connect(mapStateToProps)(HeaderWallet);
