import { useContext, useEffect, useState } from "react";
import { getPokemon, getPokemons } from "../../services/requestApi"
import { CardsList } from "../pokeCard"
import styled, { createGlobalStyle } from 'styled-components'
import { ThemeToggler } from "../theme-toggler";
import logopoke from "../../assets/logopoke.png"
import { ThemeContext } from "../../contexts/theme-context";
import { Button } from "../pokebutton";
import { Link } from "react-router-dom"

function PokeStart() {

  const [pokemons, setPokemons] = useState([])
  const [numberPoke, setNumberPoke] = useState(10)

  const { theme } = useContext(ThemeContext)

  const [input, setInput] = useState('pikachu')

  const adcNumberPoke = () => {
    setNumberPoke(numberPoke + 10)
  }

  const inputChange = (event) => {
    setInput(
      [event.target.value]
    )
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
    <div>
      <header>
        <MainStyle theme={theme} />
        <Logo><Img src={logopoke} alt="logo POKEMON"></Img></Logo>
        <ThemeToggler />
      </header>
      <main>
        <Div>
          <form>
            <Label htmlFor="search">Search your pokemon</Label>
            <Input type="text" id="search" name="search" onChange={inputChange} value={input} onClick={() => setInput('')}></Input>
            <Button> <NavLink to={`/poke/${input}`}>Search</NavLink></Button>
          </form>
        </Div>
        <div>{pokemons.length !== undefined ? <CardsList pokemon={pokemons} /> : "No pokemon found"}</div>
      </main>
      <footer>
        <Button onClick={adcNumberPoke}>Show More</Button>
      </footer>
    </div>
  );
}

const MainStyle = createGlobalStyle`
  body{
   background-color: ${props => props.theme.background};
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
const NavLink = styled(Link)`
  padding: 20px;
  color: black;
  text-decoration: none;
`
const Div = styled.div`
text-align: center;
color: yellow;
`
const Label = styled.label`
display: block;
padding: 3px;
font-weight: 500;
font-size: 20px
`
const Input = styled.input`
margin: 10px;
height: 30px;
font-size: 25px
`

export { PokeStart }
