//By José Julián Rodríguez Cisneros    3F

//2. selectionsort
//   sort(d)
// -> d an array of random numbers
// <- the random numbers sorted

//declarar array y contador de pasos
let arrayrandom=[];
var steps=0;
var min, temp;

//Insertar valores aleatorios al array
for (var i=0; i<10000; i++){
    arrayrandom[i] = parseInt(Math.floor((Math.random() * (10001-1))+1));
}

//iniciamos el contador de tiempo
console.time('time complexity');

//creamos la funcion swap
var swap = function(array, index1, index2){
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
}

//ordenar numeros con metodo Selection
for (var outer = 0; outer <= arrayrandom.length-2; ++outer) {
    min = outer;
    for (var inner = outer + 1; inner <= arrayrandom.length-1; ++inner) {
        if (arrayrandom[inner] < arrayrandom[min]) {
            min = inner;
            steps++;
        }  
    }
    swap(arrayrandom, outer, min);
}

//detenemos el contador de tiempo y mostramos los pasos
console.timeEnd('time complexity');
console.log("Total de pasos con el metodo Selector: " + steps);