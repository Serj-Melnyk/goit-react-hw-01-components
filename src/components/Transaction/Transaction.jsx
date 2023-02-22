import PropTypes from "prop-types" 
import {Table,Thead,Tbody} from "./TransactionStyled"


export const Transaction = ({item:{type,amount,currency}}) => {
    return (
        <Table className="transaction-history">
  <Thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </Thead>

  <Tbody>
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>

  </Tbody>
</Table>
    )
};

Transaction.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount : PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired
 
}
