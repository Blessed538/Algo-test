// A class is blueprint that sets the data structure of how the instance of that class will be anywhere
//  the method to create new objects must be called constructor. the class keyword creates a constant, so you cannot redefine it. 

// class is ue=sed for creating the patterns. 
class Student {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    // the this keyword here refers to the instance where this constructor will be used. it means that the firstname will be that which is inside the constructor. 
  }
}

function fullName(){
  return `your full name is ${this.firstName} ${this.lastName}`;
}

// You instantiate object from a class using the new keyword. 
let firstStudent = new Student("Jackson", "stephen");

// Instance methods: are methods that can be added to the instance of a class. i.e push methods on an array. 

firstStudent.fullName();

// static methods are not instantied when the clas is called they are only used for the class itself. 