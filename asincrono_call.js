//request , needle

const request = require('request');


//definir url de la api
const url = 'https://pokeapi.co/api/v2/pokemon/';

//hacer una peticion(request)
//a la api de rick y morty
//utilizando request

let r = request(url , {json : true}
                    , (err , res, body ) => {


                        let arreglo = body.results
                        arreglo.forEach((pokemon) => {
                            console.log(pokemon.name)
                            console.log("-----------------")
                        })



})