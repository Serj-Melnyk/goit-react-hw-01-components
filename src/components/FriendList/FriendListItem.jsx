import PropTypes from "prop-types"

export const Friend = ( {friendItem:{avatar,name,isOnline}}) => {
    return (<div class="item">
    <span class="status">{isOnline ? 'isOnline' : 'isOffline'}</span>
    <img class="avatar" src={avatar} alt={name} width="48" />
    <p class="name">{name}</p>
  </div>)
}

Friend.propTypes = {
  friendItem: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
  }).isRequired
}