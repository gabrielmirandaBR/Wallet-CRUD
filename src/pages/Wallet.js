import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';
import { fetchAPI } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    const { userEmail } = this.props;
    return (
      <>
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
        <Form />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchAPI()),
});

Wallet.propTypes = {
  userEmail: propTypes.string.isRequired,
  fetchCurrencies: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
