import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Currency extends Component {
  render() {
    const { currencies } = this.props;
    const curriciesFiltered = currencies
      .filter((currency) => currency.codein !== 'BRLT');
    return (
      <label htmlFor="currency">
        Moeda:
        <select id="currency">
          {
            curriciesFiltered.map((currency) => (
              <option
                key={ currency.name }
                value={ currency.code }
              >
                {currency.code}

              </option>
            ))
          }
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Currency.propTypes = {
  currencies: propTypes.arrayOf(propTypes.object).isRequired,
};

export default connect(mapStateToProps)(Currency);
