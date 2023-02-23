import PropTypes from "prop-types"
import { SectionStats,StatsTitle,StatsList,StatsItem, } from "./StatisticsStyled"
export  const Statistics = ({title,stats}) => { 
return (
<SectionStats className="statistics">

{title && <StatsTitle className="title">{title}</StatsTitle>}

<StatsList className="stat-list">
    {stats.map((item) => {
        return (
        <StatsItem  className="list-item" 
        style={{backgroundColor: getRandomHexColor(),
            color: getRandomHexColor()}}
        
    
        key = {item.id}>
        <span className="label">{item.label} </span>
        <span className="percentage">{item.percentage} % </span>
      </StatsItem>)
    })}
</StatsList>
</SectionStats>)
}  

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
          
        }).isRequired
    ).isRequired  
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}