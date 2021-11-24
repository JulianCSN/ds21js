/* 
*   ------------ACTIVIDAD------------
*
*   Analiza la complejidad computacional de algoritmos sobre PILAS (Tema que le tocó a 3F) con implementaciones basadas en arreglos y listas enlazadas.
*   Elabora un concentrado con el tiempo y el número de pasos que le llevó a cada implementación agregar 10,000 elementos en 7 corridas. 
*   Incluye también los promedios correspondientes.
*
*      REQUERIMIENTOS:
*
*    - implementación basada en arreglos
*    - implementación basada en listas enlazadas
*    - método para generar  números aleatorios entre [1-10,000]
*    - método para medir el tiempo entre el inicio y fin de la ejecución
*
*   BY José Julián Rodríguez Cisneros    3F 
*
*       ARRAYS
*
*/

//declarar array y contador de pasos
let arrayrandom=[];
var steps=0;

function Stack() {
    this.dataStore = [];
    
    this.top = 0; 
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

function push(element) {                          //Agregar elemento a la ultima posicion
    this.dataStore[this.top++] = element;     
}

function peek() {                               //Mostrar el utlimo elemento
    return this.dataStore[this.top-1];    
}

function pop() {                            //Eliminar la ultima posicion
    return this.dataStore[--this.top];     
}

function clear() {                      //Limpiar todo el array
    this.top = 0;                       
}

function length() {                      //cuenta cuantos elementos hay
    return this.top;
}


//Insertar valores aleatorios al array
for (var i=0; i<10000; i++){
    arrayrandom[i] = parseInt(Math.floor((Math.random() * (10001-1))+1));
}
 
//iniciamos el contador de tiempo
console.time('time complexity');

var NumAgregados = new Stack();
for(i=0; i<10000; i++){
    NumAgregados.push(arrayrandom[i]);
    steps++;
}

//detenemos el contador de tiempo
console.timeEnd('time complexity');
console.log("Total de pasos: " + steps);