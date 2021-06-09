import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Currency extends Component {
  render() {
    const { currencies, value, handleChange } = this.props;
    const curriciesFiltered = currencies
      .filter((currency) => currency.codein !== 'BRLT');
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          name="currency"
          value={ value }
          onChange={ handleChange }
        >
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
