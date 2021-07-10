import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class HeaderWallet extends Component {
  render() {
    const { userEmail, valueTotal } = this.props;
    return (
      <header>
        <div>
          <span data-testid="email-field">{userEmail}</span>
        </div>
        <div>
          <span
            data-testid="total-field"
          >
            {`R$ ${parseFloat(valueTotal).toFixed(2)}`}
          </span>
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
  valueTotal: state.wallet.sumTotal,
});

HeaderWallet.propTypes = {
  userEmail: propTypes.string.isRequired,
  valueTotal: propTypes.number.isRequired,
};

export default connect(mapStateToProps)(HeaderWallet);
