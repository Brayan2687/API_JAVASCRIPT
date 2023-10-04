
const axios = require('axios')

//request , needle

const needle = require('needle');
const request = require('request');


//definir url de la api
const url = 'https://pokeapi.co/api/v2/pokemon/';


//ejecutar transaccion async


axios.get(url)
    .then( (res) => {
        console.log(res.data.results)
    })
    .catch( (err) => {
        console.log(err)
    })