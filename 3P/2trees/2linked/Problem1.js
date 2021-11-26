/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * 
 * PROBLEM 1
 * inorder(n)
 *
 * traverses a tree in INORDER
 * @arg {tree} n - tree
 *
 * @example
 * inorder(root)
 *
 * By José Julián Rodríguez Cisneros    3F 
*/ 

function Node(o){            //Creamos la funcion para crear los nodos del arbol 
    this.d=o//bject<->data
    this.l=null//eft
    this.r=null//ight
}

let p = new Node('+');        
let o1 = new Node(3);        //asignamos valores a los nodos            
let o2 = new Node(-1);

p.l = o1                     //asignamos los valores agregados anteriormente tanto a "l" como a "r"
p.r = o2

function inorder(n){        //Funcion para ordenarlos "In Order"
   if (n!==null){
        inorder(n.l);
        console.log(n.d);
        inorder(n.r);
    }
}


function posorder(n){       //Funcion para ordenarlos "Pos Order"
  if (n!==null){
        posorder(n.l)
        posorder(n.r)
        console.log(n.d);
    }
}


inorder(p);     //En este caso necesitamos ordenarlo con inorder, por ello invocamos dicha funcion 