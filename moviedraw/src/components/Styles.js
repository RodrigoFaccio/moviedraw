import styled from 'styled-components';

export const Container = styled.div`
  max-width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
text-align:center;
margin-left:10px;
`;
export const FormBox = styled.div`
  flex-direction: column;

background:white;
width:400px;
height:auto;
border-radius:10px;
text-align:center;
color:black;


>form {
  display:flex;
  align-items:center;
  text-align:center;
  justify-content:center;
display: block;

}
`;
export const Button = styled.button`
background: var(--second);
width:100px;
height:40px;
border:none;
border-radius:5px;
color:white;
cursor: pointer;

&:hover{

}

`;
export const Imagem =styled.img`
  width:300px;
  height:400px;
`;
export const Overview = styled.p`
  color:black;
`;