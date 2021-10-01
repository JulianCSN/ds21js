//By José Julián Rodríguez Cisneros    3F

// 2. Map
// a. produce 1e5 random names, ie name35927
// b. add each random name into a Map
// c. measure the time it took
// d. calculate the average of 7 runs

//Declaracion de variables, objeto y array 
const map = new Map();
let arrayrandom=[];
var lim = 100000;
var count = 0;
var time = 0;

//ciclo de 7 repeticiones del programa
while (count < 7) {

  //ciclo para añadir numeros aleatorios al array
  for (var i=0; i<100000; i++){
    arrayrandom[i] = parseInt(Math.floor((Math.random() * ((lim+1)-1))+1));
  }
  
  var start = new Date(); //Comienza a contar el tiempo ------------------------------------------------------------
  
  //se crean 1e5 nombres aleatorios 
  for (var i=0; i<100000; i++){
    map.set('name'+arrayrandom[i],arrayrandom[i]);
  }
  var end = new Date() - start; //Se detiene el conteo de tiempo ---------------------------------------------------

  count++;
  time+=end;
}


console.log("Tiempo promedio empleado en 7 corridas: " + time/7 + " ms");