/*
function Carro(){
    var marca = "Tesla X";
    var modelos = [2016,2017];

    function mostrarMarca(){
        console.log(marca);
    }

    function desplegarModelos(){
        modelos.forEach(function(modelo){
            console.log(modelo);
        });
    }

    return {
        mostrarMarca: mostrarMarca,
        desplegarModelos: desplegarModelos
    }
}

var carro = Carro();
console.log(carro);
*/

var carro = (function Carro(){
    var marca = "Tesla X";
    var modelos = [2016,2017];

    function mostrarMarca(){
        console.log(marca);
    }

    function desplegarModelos(){
        modelos.forEach(function(modelo){
            console.log(modelo);
        });
    }

    return {
        mostrarMarca: mostrarMarca,
        desplegarModelos: desplegarModelos
    }
})();

console.log(carro);
carro.mostrarMarca();
carro.desplegarModelos();