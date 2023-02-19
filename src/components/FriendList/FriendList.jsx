import { Friend } from "./FriendListItem"
import PropTypes from "prop-types"
export const Friendlist = ({friends}) => {
return (
<ul class="friend-list">
    {friends.map((friendItem) => {
        return (
        <li key = {friendItem.id}>
            <Friend friendItem = {friendItem} /> 
        </li>
        );

})}
    
</ul>);
};

Friendlist.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired
        })
        
    ).isRequired
}