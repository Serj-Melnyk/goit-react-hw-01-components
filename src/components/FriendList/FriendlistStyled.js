import styled from "styled-components";

export const List = styled.ul`
margin-top: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
`;

export const Li = styled.li`
width: 300px;
height: 100px;
display: flex;
text-align: center;
border: 1px solid black;
border-radius: 4px;
background-color: #fff;
-webkit-box-shadow: 9px 10px 6px -4px rgba(0,0,0,0.4);
-moz-box-shadow: 9px 10px 6px -4px rgba(0,0,0,0.4);
box-shadow: 9px 10px 6px -4px rgba(0,0,0,0.4);
`;

export const FriendCard = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
`;

export const FriendOnline = styled.span`
margin-left: 10px;
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => {
return props.isOnline ? 'green' : 'red' 
}}
`;

export const Avatar = styled.img`
width: 75px;
height: 75px;
border: 1px solid black;
border-radius: 4px;
background-color: aqua;
`;

export const FriendName = styled.p`
    font-size: 24px;
    font-weight: 500;

`;

