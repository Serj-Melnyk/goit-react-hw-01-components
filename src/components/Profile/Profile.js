import PropTypes from "prop-types";
import { Card,CardImg,CardDescription,CardUserName,Stats,StatItem,StatLabel,StatValue } from "./ProfileStyled"


export const Profile = ({username,tag,location,avatar,stats}) => {
    return <Card className="profile">
    <div className="description">
      <CardImg
        src={avatar}
        alt={username}
        // width= "120"
        className="avatar"
      />
      <CardDescription>
      <CardUserName className="name">{username}</CardUserName>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
      </CardDescription>
    </div>
  
    <Stats className="stats">
      <StatItem>
        <StatLabel className="label">Followers</StatLabel>
        <StatValue className="quantity"> {stats.followers}</StatValue>
      </StatItem>
      <StatItem>
        <StatLabel className="label">Views</StatLabel>
        <StatValue className="quantity"> {stats.views} </StatValue>
      </StatItem>
      <StatItem>
        <StatLabel className="label">Likes</StatLabel>
        <StatValue className="quantity"> {stats.likes} </StatValue>
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
