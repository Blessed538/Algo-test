class Graph {
  constructor(){
    this.adjacencyList = new Map();
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex])  this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1,vertex2){
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1,vertex2){
    this.adjacencyList[vertex1]  = this.adjacencyList[vertex1].filter((v) => v !== vertex2)
    this.adjacencyList[vertex2]  = this.adjacencyList[vertex1].filter((v) => v !== vertex1)
  }

  removeVertex(vertex){
    while(this.adjacencyList[vertex].length){
      let currentVertex =  this.adjacencyList[vertex].pop();
      this.removeEdge(vertex,currentVertex)
    }
    delete this.adjacencyList[vertex];
  }


  dfsRecursion(vertex){
    let visited = {};
    let result =  [];
    // this.adjacencyList =  this.adjacencyList;
   visited[vertex] = true;
    (function dsf(start){
      if(!visited[start]) return null;
      // visited[start] =  true;
      result.push(start);
      this.adjacencyList[start].foreach((neighbour) => {
        if(!visited[neighbour]){
          visited[neighbour] = true;
          return dsf(neighbour)
        }
      }
      )
    })(vertex)
    return result;
  }

dsfIterative(vertex){
  let visited = {};
  let result = [];
  let values = [vertex];

  visited[vertex] = true;
  while(values.length){
    var currentValue =  values.pop();
    result.push(currentValue);
    this.adjacencyList[vertex].foreach((neighbour) => {
      if(!visited[neighbour]){
        visited[neighbour] = true;
        values.push(neighbour);
      }
    })
  }
  return result;
}

  Bsf(vertex){
    let visited = {};
    let result = [];
    let values = [vertex];

    visited[vertex] = true;
    while(values.length){
      var currentV =  values.shift();
      result.push(currentV);
      this.adjacencyList[vertex].foreach((neighbour) => {
        if(!visited[neighbour]){
          visited[neighbour] = true;
          result.push(neighbour);
        }
      })
    }
    return result;
  }
}

// let graphe =  new Graph();
// console.log(graphe);
// console.log(graphe.addVertex("amadi-ama"));
// console.log(graphe);
// console.log(graphe.addVertex("Rainbow"));
// console.log(graphe);
// console.log(graphe.addVertex("GRA"));
// console.log(graphe);
// console.log(graphe.addVertex("DUTSE"));
// console.log(graphe);
// console.log(graphe.addVertex("ABUJA"));
// console.log(graphe);
// console.log(graphe.addVertex("LAGOS"));
// console.log(graphe);
// console.log(graphe.addEdge("GRA","Rainbow"));
// console.log(graphe);
// console.log(graphe.addEdge("LAGOS","ABUJA"));
// console.log(graphe);
// console.log(graphe.addEdge("GRA","LAGOS"));
// console.log(graphe);
// console.log(graphe.dfsRecursion("GRA"));
// console.log(graphe);
// console.log(graphe.Bsf("GRA"));
// console.log(graphe);


// adjacentNodes
// const nodes  = ["A","B","C","D","K","F","G","H"];
// const edge = [
//   ["A","B"]
//   ["C","D"]
//   ["E","F"]
//   ["H","A"]
//   ["G","K"]
// ]


// graph using two classes.
// class Node {
//   constructor(value){
//     this.value = value
//   }
// }

// class Graph {
//   constructor(nodes) {
//     this.nodes = [...nodes]
//   }
// }

function pigIt(jum){
  let word =  jum.split('');
  console.log(typeof word);
  for (let char of word){
  }
  }
  
  console.log(pigIt('The quick brown fox jumps over the lazy dog.'));