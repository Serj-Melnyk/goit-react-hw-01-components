import PropTypes from "prop-types"
import {FriendCard,FriendOnline,Avatar,FriendName,Li } from "./FriendlistStyled"

export const Friend = ({avatar,name,isOnline}) => {
    return (
      <Li>
    <FriendCard className="item">
  
      
    <FriendOnline isOnline = {isOnline}> </FriendOnline>
    <Avatar className="avatar" src={avatar} alt={name} width="48" />
    <FriendName className="name">{name}</FriendName>
  </FriendCard>
  </Li>
  )
}

Friend.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}