import { useContext, useEffect, useState } from "react";
import { getPokemon, getPokemons } from "../../services/requestApi"
import { CardsList } from "../pokeCard"
import styled,{createGlobalStyle} from 'styled-components'
import { ThemeToggler } from "../theme-toggler";
import logopoke from "../../images/logopoke.png"
import { ThemeContext } from "../../contexts/theme-context";

function PokeStart() {

  const [pokemons, setPokemons] = useState([])
  const [numberPoke, setNumberPoke] = useState(10)

  const {theme} = useContext(ThemeContext)

  const adcNumberPoke = () => {
    setNumberPoke(numberPoke + 10)
  }

  useEffect(() => {
    const fetchData = async () => {


      const data = await getPokemons(numberPoke)
      const names = data.map((element) => {
        return (
          element.name
        )
      })
      const pokemonName = names.map(async (element) => {
        const image = await getPokemon(element)
        return (image)
      })
      const results = await Promise.all(pokemonName)

      setPokemons(results)

    }
    fetchData()
  }, [numberPoke])


  return (<div>
    <GlobalStyle theme={theme} />
    
      <Logo><Img src={logopoke} alt="logo POKEMON"></Img></Logo>
      <ThemeToggler/>
      <div>{pokemons.length > 0 ? <CardsList pokemon={pokemons} /> : "No pokemon found"}</div>
      <ButtonDiv onClick={adcNumberPoke}>Show More</ButtonDiv>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  body{
   background-color: ${props => props.theme.background};
`

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
const Logo = styled.div`
text-align: center;
margin: 5px;

`
const Img = styled.img`
width: 45%;
@media (max-width: 768px){
  width: 100%;
}
`

export { PokeStart }
