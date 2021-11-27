/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * array-based implementation of trees
 * 
 * write it and make sure it runs
 * 
 * By José Julián Rodríguez Cisneros      3F
*/

function Node(data, left, right) {
    let Arraydata = [data];                //Usamos array para almacenar los datos en lugar de la variable 
    this.data = Arraydata;
    this.left = left;
    this.right = right;
    this.show = show;
}
    
function show() {
    return this.data;                     //funcion para mostrar los datos 
}
    
function BST() {                         
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
}
    
function insert(data) {                  //funcion para insertar datos 
    var n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    }else{
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            }else{
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}
    
    
function inOrder(node) {                       //funcion para ordenar numeros con INORDER
    if (!(node == null)) {
        inOrder(node.left);
        console.log(node.show() + " ");
        inOrder(node.right);
    }
}
    
var nums = new BST();                      
nums.insert(500);
nums.insert(45);
nums.insert(777);            //Insertamos los datos al arbol
nums.insert(37);
nums.insert(4);
nums.insert(991);
nums.insert(389);
nums.insert(37);
nums.insert(3376);
nums.insert(900);
nums.insert(578);
console.log("Inorder traversal: ");       //imprir los datos con INORDER (funcion declarada arriba)
inOrder(nums.root);
