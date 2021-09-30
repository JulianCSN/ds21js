//By José Julián Rodríguez Cisneros    3F

//1. sieve of Eratosthenes
//   sieve(n)
// -> n integer
// <- the n first elements

//declaracion de variables y el array con los valores iniciales  
var num=350;
var array = [2,3,5,7];

//ciclo para identificar los nuemros primos hasta el numero ingresado
for(var i=2;i<num;i++){
   
  if (i % 2 === 0 || i%3===0 || i%5===0 || i%7===0){
    
  }else{
    array.push(i);    //push para insertar el valor en el array
  }
}

//Se muestra el array
console.log("Numeros primos del 1 al " + num);
console.log(array);