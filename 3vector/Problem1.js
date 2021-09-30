//By José Julián Rodríguez Cisneros   3F

/*
 *PROBLEM 1
 * insertAt(p,v)
 *
 * inserts a value v, at position p, in the array
 * @arg {number} p - position
 * @arg {number} v - value
 *
 * @example
 * insertAt(3,3)
 * Verify operation result by outputing the array before and after
 *
*/

let array = [1,2,3,4,5];
console.log(array);
console.log("\n");

Array.prototype.insertAt = function ( index, item ) {
    this.splice( index, 0, item );
}

var pos = parseInt(prompt("Ingrese la posicion a insertar: "));
var camb = parseInt(prompt("Ingrese numero a insertar: "));

array.insertAt(pos, camb);

console.log("\n");
console.log(array);