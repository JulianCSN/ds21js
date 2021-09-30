//By José Julián Rodríguez Cisneros   3F

// 1. DS-obj
// a. produce 1e5 random names, ie name35927
// b. add each random name into our ds-obj
// c. measure the time it took
// d. calculate the average of 7 runs

//Declaracion de variables, objeto y array 
let names = {};
let arrayrandom=[];
var lim = 100000;
var count = 0;
var time = 0;

const add = (key, value) => names[key] = value;   //se añade una constante add para agregar elementos al objeto 

//ciclo de 7 repeticiones del programa
while (count < 7) {

  //ciclo para añadir numeros aleatorios al array
  for (var i=0; i<100000; i++){
    arrayrandom[i] = parseInt(Math.floor((Math.random() * ((lim+1)-1))+1));
  }
  
  var start = new Date(); //Comienza a contar el tiempo ------------------------------------------------------------
  
  //se crean 1e5 nombres aleatorios 
  for (var i=0; i<100000; i++){
    add('name'+arrayrandom[i],arrayrandom[i]);
  }
  var end = new Date() - start; //Se detiene el conteo de tiempo ---------------------------------------------------

  count++;
  time+=end;
}

console.log("Tiempo promedio empleado en 7 corridas: " + time/7 + " ms");
