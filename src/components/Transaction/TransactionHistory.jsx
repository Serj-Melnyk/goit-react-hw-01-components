import { Transaction } from "./Transaction"
import PropTypes from "prop-types"

export  const TransactionHistory = ({items}) => {
    return (
    <ul>
        {items.map((item) => {

            return (<li key = {item.id}>
                < Transaction  item = {item} />
            </li>
            );

        })}
    </ul>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired 
        })
    ).isRequired,

}