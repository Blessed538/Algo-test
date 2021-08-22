// Graphs are nodes with connection amongst them.

// Vertex  a node
// Edge = a connection between the nodes.

// Type sof Graph
// 1. Unidirected graph. i.e facebook friends relationship. There is no direction for the nodes connections.
// 2. Directed graph - i.e IG,twitter.
// 3. Weighted graph - this graph has information on the Edges about the connections of the nodes.

//ADJACENCY MATRIX

// ADJACENCY LIST

class Graph {
  constructor() {
    this.adjacencyList = {};
    // vertex is the key while edge is the value.
  }

  // write a method called addVertex, which accepts a name of a vertex
  // It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array.
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  // this function should accept two vertices, we will call them vertex1 and vertex2
  // The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
  // The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push[vertex2];
    this.adjacencyList[vertex2].push[vertex1];
  }
  // this function accepts two vertices, we'll call them vertex1 and vertex2
  // the function should reassign the key of vertex1 to be an array that does not contain vertex2
  // the function should reassign the key of vertex2 to be an array that does nit contain vertex1
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  // the function should accept a vertex to remove
  // the function should loop as long as there are any other vertices in the adjacency list for that vertex.

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  // the function should accept a starting node
  // create a list to store the end result, to be returned at the very end
  // create an object to store visited verticles
  // Create a helper function which accepts a vertex
  // The helper function should return early if the vertex is empty
  // the helper function should place the vertex it accepts into the visted object and push that vertex into the result array
  // Loop over all of the values in the adjacencyList for that vertex
  // if any of those values have not been visited , recursively invoke the helper function with that vertex.

  DsfRecursion(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }

  // the function should accept a starting node
  // Create a stack to help use keep track of verticles(use a list/array)
  // Create a list to store the end result, to be returned at the very end
  // Create an object to store visited verticles
  // Add the starting vertex to the stack, and mark it visited
  // while the stack has something in it:
  //Pop the next vertex from the stack
  // if that vertext hasn't been visited yet:
  //Mark it as visited
  // Add it to the result list
  // Push all of its neighbors into the stack
  DsfIterative(start) {
    const stack = [start];
    const result = [];
    const hash = {};

    hash[start] = true;
    while (stack.length) {
      let currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!hash[neighbor]) {
          hash[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  // This function should accept a starting vertex
  // create a queue(you can use an array) and place the starting vertex in it
  // create an array to store the nodes visited
  // create an object to store nodes
  // Mark the starting vertex as visited
  // loop as long as there is anything in the queue
  //Remove the first vertex from the queue and push in into the array that stores nodes visited
  // Loop over each vertex in the adjacency list for the vertex you are visiting
  // If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
  // Once you have finished looping, return the array of visited nodes.
  Bfs(start) {
    const queue = [start];
    const result = [];
    const nodes = {};
    nodes[start] = true;
    let currentVertex;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}
