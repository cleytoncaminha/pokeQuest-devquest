import { Link } from "react-router-dom"
import styled from 'styled-components'

const CardsList = (props) => {
    const pokemons = props.pokemon

    return (
        <Div>
            {pokemons.map((element, index) => {
                return (<PokeList key={index}>
                    <NavLink to={`/poke/${element.name}`}>
                        <div>
                            <img src={element.sprites.front_default} alt={element.name}></img>
                            <div>{element.name}</div>
                            <div>{element.types.map((types, index) => {
                                return (
                                    <span key={index}> {types.type.name}</span>
                                )
                            })}</div>
                        </div>
                    </NavLink>
                </PokeList>)
            })}
        </Div>
    )
}

const Div = styled.div`
display: flex;
flex-wrap: wrap;
padding:20px;
justify-content:center;
@media (max-width: 768px){
    display: block;
    
}
`
const PokeList = styled.div`
background-color: #7AACBF;
margin: 5px;
text-align:center;
width:25%;
align-itens:center;
padding-top: 20px;
padding-bottom: 20px;
border-radius:20px;
border: 3px solid #7E281B;
box-shadow: 1px 5px 6px 1px rgba(0, 0, 0, 0.2);
@media (max-width: 768px){
    width: 50%;
    margin: 3% auto
}
`
const NavLink = styled(Link)`
  padding: 20px;
  color: black;
  text-decoration: none;
`
export { CardsList }