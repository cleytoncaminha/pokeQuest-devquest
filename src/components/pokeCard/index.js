import { Link } from "react-router-dom"
import styled from 'styled-components'

const CardsList = (props) => {
    const pokemons = props.pokemon

    return (
        <Div>
            {pokemons.map((element, index) => {
                return (<PokeList key={index}>
                    <Link to={`/poke/${element.name}`} style={{ textDecoration: 'none' }}>
                        <div>
                        <img src={element.sprites.front_default} alt={element.name}></img>
                        <PokeName>{element.name}</PokeName>
                        <div>{element.types.map((types, index) => {
                            return (
                                <span key={index}> {types.type.name}</span>
                            )
                        })}</div>
                       </div>
                    </Link>
                </PokeList>)
            })}
        </Div>
    )
}

const Div = styled.div`
background-color: #1D63AB;
display: flex;
flex-wrap: wrap;
padding:20px;
justify-content:center;
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
box-shadow: 1px 5px 6px 1px rgba(0, 0, 0, 0.2)
`
const PokeName = styled.div`
color: #161C1C;
`
export { CardsList }