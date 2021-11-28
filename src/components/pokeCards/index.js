import { useEffect, useState } from "react";
import { getPokemon, getPokemons } from "../../services/requestApi"

const CardsList = (props) => {
  const pokemons = props.pokemon

  return (
    <div>
      {pokemons.map((element, index) => {
        return (<div key={index}>
          <img src={element.sprites.front_default} alt={element.name}></img>
          <p>{element.name}</p>
          <p>{element.types.map((types, index) => {
            return (
              <span key={index}> {types.type.name}</span>
            )
          })}</p>
        </div>)
      })}

    </div>
  )
}



function PokeCard() {

  const [pokemons, setPokemons] = useState()
  const [numberPoke, setNumberPoke] = useState(10)

  const adcNumberPoke = () => {
    setNumberPoke(numberPoke + 10)
  }
  const Button = () => {
    return (
      <button className="btn" onClick={adcNumberPoke}>Carregar Mais</button>
    )
  }

  useEffect(() => {
    const fetchData = async () => {


      const data = await getPokemons(numberPoke)
      const urls = data.map((element) => {
        return (
          element.url
        )
      })
      const pokemonUrl = urls.map(async (element) => {
        const image = await getPokemon(element)
        return (image)
      })
      const results = await Promise.all(pokemonUrl)

      setPokemons(results)

    }
    fetchData()

  }, [numberPoke])


  return (
    <div className="pokeCards">
      {pokemons !== undefined ? <CardsList pokemon={pokemons} /> : "nenhum pokemon encontrada"}
      <Button />
    </div>
  );
}

export default PokeCard
