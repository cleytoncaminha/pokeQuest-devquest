
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

  export {CardsList}