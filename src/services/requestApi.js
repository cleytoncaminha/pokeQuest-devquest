async function getPokemons() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10&offset=20")
    const pokemons = await response.json()
    const results = pokemons.results
    return results
}

async function getPokemon(url){
    const response = await fetch(url)
    const pokemons = await response.json()
    console.log(pokemons)
    return pokemons
}


export {getPokemons, getPokemon}