import { useState, useEffect } from "react"
import {getPokeAbility} from "../../services/requestApi"

const PokeDetails = (props) => {
    const [ability, setAbility] = useState()

    const pokemon = props.pokemon
    const abilities = pokemon.abilities
    const abilitiesUrl = abilities.map((element)=>{
        return element.ability.url
    })

    useEffect(() => {
        const fetchData = async () => { 
            const data = abilitiesUrl.map(async (element)=>{
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
            <img src={pokemon.sprites.front_default}></img>
            <p>{pokemon.types.map((types, index) => {
                return (
                    <span key={index}> {types.type.name}</span>
                )
            })}</p>
            <h3>Lista de movimentos</h3>
             <p>{pokemon.moves.map((moves, index) => {
                            return (
                                <span key={index}> {moves.move.name}</span>                                
                            )
                        })}</p>                             
        </div>
    )
}

export { PokeDetails }