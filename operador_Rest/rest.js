
function suma(...numeros){
	return numeros.reduce((suma,numeros)=> suma + numeros,0);
}

const resultado = suma(1,2,3,4,5,6,7,8,9,10);
console.log(resultado);