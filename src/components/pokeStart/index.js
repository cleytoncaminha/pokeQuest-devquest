import { useEffect, useState } from "react";
import { getPokemon, getPokemons } from "../../services/requestApi"
import { CardsList } from "../pokeCard"
import styled from 'styled-components'

function PokeStart() {

  const [pokemons, setPokemons] = useState([])
  const [numberPoke, setNumberPoke] = useState(10)

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


  return (
    <Div>
      <Logo>PokeQuest</Logo>
      <div>{pokemons.length > 0 ? <CardsList pokemon={pokemons} /> : "Nenhum pokemon encontrado"}</div>
      <ButtonDiv onClick={adcNumberPoke}>Show More</ButtonDiv>
    </Div>
  );
}

const Div = styled.div`
background-color: #1D63AB;
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
}
`
const Logo = styled.div`
color: yellow; 
text-shadow:#000 2px -1px, #000 -1px 2px, #000 2px 1px, #000 -1px -1px;
text-align: center;
font-size: 500%;
font-weight: 800,
`

export { PokeStart }
