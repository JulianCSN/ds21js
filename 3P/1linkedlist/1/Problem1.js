/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * contains(v)
 *
 * look up for value v in the linked list
 * @arg {type} v - value; may be of chars, numbers, u objects
 * @returns {bool} - true of false, if value v exist or not
 * may use traverse
 *
 * @example
 * contains(3)
 *
 * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array}
 * @see {@link https://jsdoc.app}
 * 
 * BY JOSÉ JULIÁN RODRÍGUEZ CISNEROS  3F
*/

function Node(data) {//constructor
    this.data = data                  
    this.next = null                  
}
 
function Linked(n) {
    this.head = n
    this.tail = n
    this.size = 1
 
    this.getHead = getHead
    this.prepend = prepend
    this.append = append
    this.traverse = traverse
    this.contains = contains
}
 
function getHead(){
   return this.head
}
 
function prepend(n){
    n.next = this.head
    this.head=n
    this.size++
}
 
function append(n){
    n.next = null
    this.tail.next=n
    this.tail=n
    this.size++
}
 
function traverse(){
    let c=this.head
    while(c){
        //	    console.log(c.key)
        console.log(c.data)
        c=c.next
    }
    console.log('\n')
}
 
 
function contains(element) {
    let l=this.head                 // funcion para ver si el dato ingresado se encuentra 
    let p=false
 
    while(l){
        if (l.data==element ) {
            p=true;
        }
        l=l.next
    }
    console.log(p)
}
 
let n1=new Node('x')
let n2=new Node('y')           //se ingresan los valores 
let l=new Linked(n1)
 
l.prepend(n2)
 
l.append( new Node('z'))
l.traverse()
 
l.prepend(new Node('f'))
l.traverse(l.getHead())
 
l.contains('f');
l.contains('g');    
l.contains('z');
l.contains('x');     //ingresamos los datos que queremos verificar si se encuentran (retorna valores booleanos)
l.contains('o');


