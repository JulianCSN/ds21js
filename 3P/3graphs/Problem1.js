/*
* INSTRUCTIONS
* 
* implement a method, function, non-function solution
* 
* PROBLEM 
*
* select one implementation af a graph from books (pdfs):
* mcm14
* gro14  
*
* write it and make sure it runs
*
*
* BY José Julián Rodríguez Cisneros   3F
*
* 25/11/2021
*
*/


function Graph(v) {             //Funcion para representar un grafo (crearlo)
    this.vertices = v;  
    this.edges = 0;           
    this.adj = [];

    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push("");
    }

    this.addEdge = addEdge;
    this.showGraph = showGraph;
}
    
    
function addEdge(v,w) {     //Funcion para agregar una arista 
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}   
    
function showGraph() {                //Funcion para mostrar el gráfo 
    for (var i = 0; i < this.vertices; ++i) {
        console.log(i + " -> ");
        
        for (var j = 0; j < this.vertices; ++j){

            if (this.adj[i][j] != undefined){
                console.log(this.adj[i][j]);
            }      
        }
        console.log();
    }
}
    
g = new Graph(5);    //definimos los vertices que tendrá el gráfo 
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);     //Agregamos los datos 
g.addEdge(2,4);
g.showGraph();      //Mostramos el gráfo con la funcion showGraph
