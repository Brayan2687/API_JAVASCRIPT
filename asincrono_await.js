const axios = require('axios')
const url = 'https://pokeapi.co/api/v2/pokemon/';

const personajes = async () => {

    const res = await axios.get(url)

    let arreglo = res.data.results
    arreglo.forEach((pokemon) => {
        console.log(pokemon.name)
        console.log('-----------')
    })
}

personajes();