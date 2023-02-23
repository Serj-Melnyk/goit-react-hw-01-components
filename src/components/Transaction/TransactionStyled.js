
import styled from "styled-components"

export const Table = styled.table`
margin-top: 50px;
width: 800px;
height: 100%;
-webkit-box-shadow: 3px 7px 13px 1px rgba(0,0,0,0.38);
-moz-box-shadow: 3px 7px 13px 1px rgba(0,0,0,0.38);
box-shadow: 3px 7px 13px 1px rgba(0,0,0,0.38);
background-color: #fff;
`;

export  const Thead = styled.thead`
background-color: #31c0d8;
height: 40px;
color: #ffffff;
`;

export const Trow = styled.tr`
height: 40px;
text-align: center;
color: #4c3e7c;

&:nth-child(2n) {
  background-color: #c6e2ff;
  
}

`;