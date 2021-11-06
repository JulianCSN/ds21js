/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * Stack implementation (array-based)
 * 
 *  BY JOSÉ JULIÁN RODRÍGUEZ CISNEROS  3F
 *
*/


function Stack() {
    this.dataStore = [];
    
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

function push(element) {
    this.dataStore[this.top++] = element;    //Agregar elemento a la ultima posicion 
}

function peek() {
    return this.dataStore[this.top-1];    //Mostrar el utlimo elemento
}

function pop() {
    return this.dataStore[--this.top];     //Eliminar la ultima posicion
}

function clear() {     
    this.top = 0;                       //Limpiar todo el array
}

function length() {                      //cuenta cuantos elementos hay
    return this.top;
}

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.length());
console.log(s.peek());
var popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());