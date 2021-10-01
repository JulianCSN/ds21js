//By José Julián Rodríguez Cisneros   3F

/*
* PROBLEM 2
* removeAt(p)
*
* removes value at position p
* @arg {number} p - position
*
* @example
* removeAt(3)
*/

let array = [1,2,3,4,5];
console.log(array);
console.log("\n");

Array.prototype.removeAt = function ( index ) {
    this.splice( index, 1);
}

var pos = parseInt(prompt("Ingrese la posicion a eliminar: "));

array.removeAt(pos);

console.log("\n");
console.log(array);