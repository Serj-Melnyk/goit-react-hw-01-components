import { Transaction } from "./Transaction"

export  const TransactionHistory = ({items}) => {
    return (
    <ul>
        {items.map((item) => {

            return <li key = {item.id}>
                < Transaction  item = {item} />
            </li>

        })}
    </ul>
    )
}