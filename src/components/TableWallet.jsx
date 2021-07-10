import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Table } from 'react-bootstrap';
import { removeItem } from '../redux/actions';

import '../styles/TableWallet.css';

class TableWallet extends Component {
  constructor() {
    super();

    this.renderTable = this.renderTable.bind(this);
  }

  renderTable() {
    const { currencies, removeItem: remove } = this.props;

    return currencies.map((item, index) => {
      const { name } = item.exchangeRates[item.currency];
      const filteredName = name.split('/')[0];
      const currencyValue = item.exchangeRates[item.currency].ask;
      const currencyValueFiltered = parseFloat(currencyValue).toFixed(2);
      const convertedValue = parseFloat((item.value * currencyValue)).toFixed(2);

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
          <td>
            <Button
              variant="danger"
              data-testid="delete-btn"
              type="button"
              onClick={ () => remove(item.id) }
            >
              Deletar
            </Button>

          </td>
        </tr>
      );
    });
  }

  render() {
    const { currencies } = this.props;
    if (currencies.length > 0) {
      return (
        <div className="table">
          <Table
            striped
            hover
            size="sm"
            variant="success"
            id="columns"
          >
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Tag</th>
                <th>Pagamento</th>
                <th>Valor</th>
                <th>Moeda</th>
                <th>Câmbio</th>
                <th>Conversão</th>
                <th>Moeda</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              {this.renderTable()}
            </tbody>
          </Table>
        </div>
      );
    }
    return '';
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (payload) => dispatch(removeItem(payload)),
});

TableWallet.propTypes = {
  currencies: propTypes.arrayOf(propTypes.object).isRequired,
  removeItem: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableWallet);
