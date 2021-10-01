//By José Julián Rodríguez Cisneros    3F

//2. random number
//   random(n)
// -> n integer
// <- one random number in [1-n]

var number = 10;
randomNumber = parseInt(Math.floor((Math.random() * ((number+1)-1))+1));
console.log("Numero aleatorio entre el 1 y el " + number + " ------> " + randomNumber);