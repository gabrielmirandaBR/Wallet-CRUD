import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';

class Currency extends Component {
  render() {
    const { currencies, value, handleChange } = this.props;
    const curriciesFiltered = currencies
      .filter((currency) => currency.codein !== 'BRLT');
    return (
      <Form.Group>
        <Form.Label htmlFor="currency">
          Moeda
          <div>
            <select
              className="form-control"
              id="currency"
              name="currency"
              value={ value }
              onChange={ handleChange }
            >
              {
                curriciesFiltered.map((currency, index) => (
                  <option
                    key={ index }
                    value={ currency.code }
                  >
                    {currency.code}

                  </option>
                ))
              }
            </select>
          </div>
        </Form.Label>
      </Form.Group>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Currency.propTypes = {
  currencies: propTypes.arrayOf(propTypes.object).isRequired,
  value: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};

export default connect(mapStateToProps)(Currency);
