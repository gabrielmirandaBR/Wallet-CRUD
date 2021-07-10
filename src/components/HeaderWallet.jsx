import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import '../styles/HeaderWallet.css';

class HeaderWallet extends Component {
  render() {
    const { userEmail, valueTotal } = this.props;
    return (
      <header className="header">
        <div>
          <img src="https://img.icons8.com/windows/32/000000/email-open.png" alt="email icon" width="30px" />
          {' '}
          <span data-testid="email-field">{userEmail}</span>
        </div>
        <div>
          <img src="https://img.icons8.com/ios/50/000000/money--v1.png" alt="money icon" width="30px" />
          {' '}
          <span
            data-testid="total-field"
            className="header_total"
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
