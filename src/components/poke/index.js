import { useState, useEffect } from "react"
import { getPokemon } from "../../services/requestApi"
import { useParams } from "react-router"
import { PokeDetails } from "../pokeDetails"
import styled from "styled-components"

const Poke = () => {
    const [pokemon, setPokemon] = useState()

    const { name } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPokemon(name)
            setPokemon(data)
        }
        fetchData()
    }, [])

    return (
        <div>
            <div>
            {pokemon !== undefined ? <PokeDetails pokemon={pokemon} /> : "Nenhum pokemon encontrado"}
            </div>
        </div>
    )
}


export { Poke }
