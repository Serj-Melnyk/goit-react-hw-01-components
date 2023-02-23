import styled from "styled-components";

export const SectionStats = styled.section`
margin-top: 50px;
width: 350px;
height: 180px;
background-color: white;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

export const StatsTitle = styled.h2`
margin-top: 20px;
padding: 20px 50px;
color: #335d89;
`;

export const StatsList = styled.ul`
width: 100%;
height: 75px;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;


`;

export const StatsItem = styled.li`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;

.percentage {
    font-size: 22px;
    font-weight: 600;
}
`;
