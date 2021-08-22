function User(firstName, lastName, age, state ){
  //the "this" keyword helps in the asssigning of the constructor parameter as the type of the User Instance
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.state = state;

}

var user1 = new User("mike", "grace",80, "aks");

// user1 {firstName:"mike", lastName:"grace", age:80, state:"aks"};
// this refers to the object that will created by the constructor function.

//The prototype object refers to an object other objects could refer to for information and functionality that they need. new properties are added to the proto_objects

User.prototype.emailDomain = '@facebook.com';
User.prototype.getEmailAddress = function(){
  return this.firstName + this.lastName + this.emailDomain;
}

//LinikedList
// A linklist is a list of elements called nodes that are connected in a single file line. There are types of linklists 
//1.Single linkedList each node has a reference to the element before it or the next node.It needs the head and tail to perform it's operations

//2.Double LinkedList each element has a reference to the element before and the previous ones too.

function LinkList(){
this.head = null;
this.tail = null;
}

function Node(value, next, prev){
this.value = value;
this.next = next;
this.prev = prev;
}

var high = new LinkList();