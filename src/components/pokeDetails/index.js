import { useState, useEffect } from "react"
import { getPokeAbility } from "../../services/requestApi"
import styled from 'styled-components'

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
            <Card>
            <Img src={pokemon.sprites.front_default} alt={pokemon.name}></Img>
            <Div>
                <Name>{pokemon.name}</Name>
           
            <p>{pokemon.types.map((types, index) => {
                return (
                    <span key={index}> {types.type.name}</span>
                )
            })}</p>
            <h1>Moves List</h1>
            <List>{pokemon.moves.map((moves, index) => {
                return (
                    <Itens key={index}>{moves.move.name}</Itens>
                )
            })}</List>
            <div><h1>Abilities</h1>
                {ability !== undefined ? ability.map((ability, index) => {
                    return (<div key={index}>
                        <h4>{ability.name}</h4>
                        <p>{ability.effect_entries[1].language.name === "en" ? ability.effect_entries[1].effect : ability.effect_entries[0].effect}</p>
                    </div>
                    )
                }) : "carregando habilidades"}</div></Div>
                </Card>
        </div>
    )
}

const Card = styled.div`
background-color: #7AACBF;
text-align:center;
width:90%;
border-radius:20px;
border: 3px solid #7E281B;
box-shadow: 1px 5px 6px 1px rgba(0, 0, 0, 0.2);
margin: auto;
display: flex;
align-items:center;
justify-content: space-around;
padding: 5px;
@media (max-width: 768px){
    display:block
  }
`

const List = styled.ul`
display: flex;
flex-wrap: wrap;
list-style:none;
justify-content: center;
`
const Itens = styled.li`
margin: 5px 10px ;
text-transform: capitalize;
`

const Img = styled.img`
width: 30%;
@media (max-width: 768px){
    width: 50%
  }
`

const Name = styled.h1`
font-size: 50px;
text-transform: uppercase;
font-weight:800
`

const Div = styled.div`
width: 50%;
background-color: #D2DED6;
border-radius: 20px;
border: 3px solid #7E281B;
box-shadow: 1px 8px 8px 1px rgba(0, 0, 0, 0.2);
padding:8px;
@media (max-width: 768px){
    width: 98%;
    margin: auto;
    padding: 0px
  }
`

export { PokeDetails }
