import PropTypes from "prop-types";
import { Card,CardImg,CardDescription,CardUserName,Stats,StatItem,StatLabel,StatValue } from "./ProfileStyled"


export const Profile = ({username,tag,location,avatar,stats}) => {
    return <Card class="profile">
    <div class="description">
      <CardImg
        src={avatar}
        alt={username}
        // width= "120"
        class="avatar"
      />
      <CardDescription>
      <CardUserName class="name">{username}</CardUserName>
      <p class="tag">{tag}</p>
      <p class="location">{location}</p>
      </CardDescription>
    </div>
  
    <Stats class="stats">
      <StatItem>
        <StatLabel class="label">Followers</StatLabel>
        <StatValue class="quantity"> {stats.followers}</StatValue>
      </StatItem>
      <StatItem>
        <StatLabel class="label">Views</StatLabel>
        <StatValue class="quantity"> {stats.views} </StatValue>
      </StatItem>
      <StatItem>
        <StatLabel class="label">Likes</StatLabel>
        <StatValue class="quantity"> {stats.likes} </StatValue>
      </StatItem>
    </Stats>
  </Card>
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired ,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
}).isRequired,
};
