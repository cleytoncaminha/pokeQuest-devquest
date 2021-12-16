import styled from 'styled-components'

export const Button = (props) => {



    return (
        <ButtonDiv {...props} ></ButtonDiv>
    )
}

const ButtonDiv = styled.div`
align-text: center;
background-color: #d2ded4;
width: 10%;
font-size: 20px;
margin:auto;
padding: 10px;
text-align: center;
color: #7E281B;
font-weight : 700;
border: 3px solid #7AACBF;
border-radius: 50px;
&:hover{
  cursor: pointer
};
&:active{
  color: #d2ded4;
  background-color: #73281b
};
@media (max-width: 768px){
  width: 45%;
}
`