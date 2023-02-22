import styled from "styled-components";

export const Card = styled.div`
background-color: #fff;
width: 350px;
height: 400px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
border: 1px solid #d9e4f1;
border-radius: 6px;
box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 
0px 1px 1px rgb(0 0 0 / 14%), 
0px 2px 1px rgb(0 0 0 / 20%);
`;

export const CardImg = styled.img`
margin-top: 20px;
width: 150px;
border-radius: 50%;
background-color: aqua;
`;

export const CardDescription = styled.div`
margin-top: 20px;
gap: 10px;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
color: rgb(120 141 163);
font-size: 16px;
font-weight: bold;

`;

export const CardUserName = styled.p`
font-size: 20px;
font-weight: bold;
color: #000000;
`;

export const Stats = styled.ul`
width: 100%;
height: 100%;
margin-top: 40px;
background-color: #d9e4f1;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

export const StatItem = styled.li`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 20px;
gap: 5px;

&:not(:last-child){
    border-right: 0.5px solid rgb(120 141 163);
}
`;

export const StatLabel = styled.span`
color: rgb(120 141 163);
font-size: 16px;
font-weight: bold;
`;

export const StatValue = styled.span`
color: #000000;
font-size: 16px;
font-weight: bold;
`;