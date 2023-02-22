import PropTypes from "prop-types"
import {FriendCard,FriendOnline,Avatar,FriendName} from "./FriendlistStyled"

export const Friend = ( {friendItem:{avatar,name,isOnline}}) => {
    return (
    <FriendCard className="item">
      {/* <BsRecordFill /> */}
      
    <FriendOnline isOnline = {isOnline}> </FriendOnline>
    <Avatar className="avatar" src={avatar} alt={name} width="48" />
    <FriendName className="name">{name}</FriendName>
  </FriendCard>)
}

Friend.propTypes = {
  friendItem: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
  }).isRequired
}