import { Friend } from "./FriendListItem"
import PropTypes from "prop-types"
import { List } from "./FriendlistStyled"

export const Friendlist = ({friends}) => {
return (
<List className="friend-list">
    {friends.map((item) => {
        return (
          <Friend 
            key = {item.id}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline} /> 
       
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