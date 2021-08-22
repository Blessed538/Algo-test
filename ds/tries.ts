
class TrieNode{
  isEnd:boolean;
  children:TrieNode[];
  constructor(){
    this.isEnd =  false;
    this.children = [];
  }
}

class Trie{
  root:TrieNode
  constructor(){
    this.root =  new TrieNode()
    
  }
  insert(w:string){
    let currentNode =  this.root;
    for(let x of w){    
      let index =  x.charCodeAt(0) -  'a'.charCodeAt(0);
     if(currentNode.children[index]  ){
       currentNode =  currentNode.children[index];
     } else {
       currentNode.children[index] = new TrieNode()
       currentNode =  currentNode.children[index];
     }
    
    }
    currentNode.isEnd = true;
  }
  contains(w:string){
    let currentNode =  this.root;
    for(let x of w){
      let index =  x.charCodeAt(0) -  'a'.charCodeAt(0);
     if(currentNode.children[index]){
       currentNode =  currentNode.children[index];
     } else {
       return false
     }
    
    }
    return currentNode.isEnd
  }
}


const test = new Trie();

test.insert('george')
test.insert('mike')
console.log(test.contains('george'))
console.log(test.contains('mke'))