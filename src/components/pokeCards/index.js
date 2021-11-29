import { useEffect, useState } from "react";
import { getPokemon, getPokemons } from "../../services/requestApi"
import { CardsList } from "../pokeCard"

function PokeCards() {

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
    <div className="pokeCards">
      {pokemons !== undefined ? <CardsList pokemon={pokemons} /> : "Nenhum pokemon encontrado"}
      <Button />
    </div>
  );
}

export {PokeCards}
