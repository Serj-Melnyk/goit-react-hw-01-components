import { Friend } from "./FriendListItem"
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