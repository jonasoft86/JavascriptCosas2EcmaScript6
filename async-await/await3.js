const fetch = require('node-fetch');

function idPokemon(){
    return Math.floor(Math.random() * (811-1+1) +1);
}

function conseguirPokeballs(){
    return new Promise(resolve => {
        setTimeout(()=>{resolve('@')},2000);
    })
}

function informacionPokemon(){
    return fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon()}`)
    .then(res => res.json());
}

/*
function capturarPokemones(){
    conseguirPokeballs().then(function(poke){
        console.log(poke);

        informacionPokemon().then(function(pokemon){
            console.log(`Pokemon ${pokemon.name} capturado!`);

            informacionPokemon().then(function(pokemon){
                console.log(`Pokemon ${pokemon.name} capturado!`);

                informacionPokemon().then(function(pokemon){
                    console.log(`Pokemon ${pokemon.name} capturado!`);
                });
            });
        });
    });
}
*/
async function capturarPokemones(){
    const pokeball = await conseguirPokeballs();
    console.log(pokeball);

    const poke1 = await informacionPokemon();
    const poke2 = await informacionPokemon();
    const poke3 = await informacionPokemon();

    const [p1,p2,p3] = await Promise.all([poke1,poke2,poke3]);
    console.log(`${p1.name},${p2.name} y ${p3.name} capturados!`);
}

capturarPokemones();