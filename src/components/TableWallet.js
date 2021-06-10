import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class TableWallet extends Component {
  constructor() {
    super();

    this.renderTable = this.renderTable.bind(this);
  }

  renderTable() {
    const { currencies } = this.props;

    return currencies.map((item, index) => {
      const { name } = item.exchangeRates[item.currency];
      const filteredName = name.split('/')[0];
      const currencyValue = item.exchangeRates[item.currency].ask;
      const currencyValueFiltered = parseFloat(currencyValue).toFixed(2);
      const convertedValue = parseFloat((item.value * currencyValue)).toFixed(2);
      const codeCurrency = item.exchangeRates[item.currency].code;

      return (
        <tr key={ index }>
          <td>{item.description}</td>
          <td>{item.tag}</td>
          <td>{item.method}</td>
          <td>{`${item.value}`}</td>
          <td>{filteredName}</td>
          <td>{currencyValueFiltered}</td>
          <td>{convertedValue}</td>
          <td>Real</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {this.renderTable()}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.expenses,
});

TableWallet.propTypes = {
  currencies: propTypes.arrayOf(propTypes.object).isRequired,
};

export default connect(mapStateToProps)(TableWallet);
