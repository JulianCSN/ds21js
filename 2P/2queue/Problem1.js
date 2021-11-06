/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * Queue implementation (array-based)
 *
 * 
 *  By JOSÉ JULIÁN RODRÍGUEZ CISNEROS 3F
 */



function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

function enqueue(element) {
    this.dataStore.push(element);    //Agregar elementos al array 
}

function dequeue() {
    return this.dataStore.shift();   //Eliminar el elemento inicial
}

function front() {
    return this.dataStore[0];     //Identificar el elemento que se encuentra al principio
}

function back() {
    return this.dataStore[this.dataStore.length-1];   //identificar el elemento que se encuentra al final de la cola 
}

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }else{
        return false;
    }
}


var q = new Queue();

q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());