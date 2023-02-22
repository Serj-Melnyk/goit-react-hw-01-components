import { Friend } from "./FriendListItem"
import PropTypes from "prop-types"
import { List, Li} from "./FriendlistStyled"

export const Friendlist = ({friends}) => {
return (
<List className="friend-list">
    {friends.map((friendItem) => {
        return (
        <Li key = {friendItem.id}>
            <Friend friendItem = {friendItem} /> 
        </Li>
        );

})}
    
</List>);
};

Friendlist.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired
        })
        
    ).isRequired
}