import { useState, useEffect } from "react"
import { getPokeAbility } from "../../services/requestApi"

const PokeDetails = (props) => {
    const [ability, setAbility] = useState()

    const pokemon = props.pokemon
    const abilities = pokemon.abilities
    const abilitiesUrl = abilities.map((element) => {
        return element.ability.url
    })

    useEffect(() => {
        const fetchData = async () => {
            const data = abilitiesUrl.map(async (element) => {
                return (
                    await getPokeAbility(element)
                )
            })
            const results = await Promise.all(data)
            setAbility(results)
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
            <p>{pokemon.types.map((types, index) => {
                return (
                    <span key={index}> {types.type.name}</span>
                )
            })}</p>
            <h3>moves list</h3>
            <p>{pokemon.moves.map((moves, index) => {
                return (
                    <span key={index}> {moves.move.name}</span>
                )
            })}</p>
            <div><h3>Abilities</h3>
                {ability !== undefined ? ability.map((ability, index) => {
                    return (<div key={index}>
                        <h4>{ability.name}</h4>
                        <p>{ability.effect_entries[1].language.name === "en" ? ability.effect_entries[1].effect : ability.effect_entries[0].effect}</p>
                    </div>
                    )
                }) : "carregando habilidades"}</div>
        </div>
    )
}

export { PokeDetails }