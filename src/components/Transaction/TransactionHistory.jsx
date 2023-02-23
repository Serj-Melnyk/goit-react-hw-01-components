import { Table,Thead,Trow } from "./TransactionStyled"

export const TransactionHistory = ({items}) => {
    return (
        <Table className="transaction-history">
  <Thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </Thead>

  <tbody>{items.map((item) => {
    return (
        <Trow key={item.id}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </Trow>
    )
  })}
  </tbody>
</Table>
    )};