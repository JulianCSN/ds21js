//By José Julián Rodríguez Cisneros    3F

//1. bubblesort
//   sort(d)
// -> d an array of random numbers
// <- the random numbers sorted

//declarar array y contador de pasos
let arrayrandom=[];
var steps=0;

//Insertar valores aleatorios al array
for (var i=0; i<10000; i++){
    arrayrandom[i] = parseInt(Math.floor((Math.random() * (10001-1))+1));
}

//iniciamos el contador de tiempo
console.time('time complexity');

//Creamos la funcion swap
var swap = function(array, index1, index2){
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
}

//ordenar numeros con metodo burbuja
for(i=0; i<arrayrandom.length; i++){
    for(var j=0; j<arrayrandom.length-1; j++){
        if (arrayrandom[j] > arrayrandom[j+1]){ 
            swap(arrayrandom, j, j+1); 
            steps++;
        }
    }
}

//detenemos el contador de tiempo
console.timeEnd('time complexity');
console.log("Total de pasos con el metodo Bubble: " + steps);
