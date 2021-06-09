import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <header>
        <div>
          <span data-testid="email-field">{userEmail}</span>
        </div>
        <div>
          <span data-testid="total-field">0</span>
        </div>
        <div>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </header>

    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Wallet.propTypes = {
  userEmail: propTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
