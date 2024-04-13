const url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/pikachu"

async function pokemonSearch(){
    const res = await fetch(url)
    let data = await res.json();
    console.log(data)
 
}

pokemonSearch()