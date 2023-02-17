export const Friend = ( {friendItem:{avatar,name,isOnline}}) => {
    return (<div class="item">
    <span class="status">{isOnline}</span>
    <img class="avatar" src={avatar} alt={name} width="48" />
    <p class="name">{name}</p>
  </div>)
}