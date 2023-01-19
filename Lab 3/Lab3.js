
/*
  1.
  Create a method for all arrays to sum an array of numbers.
  If any element in the array is not a number, the method should
  throw an error with a message: 'Target array must contain numbers only'.
  [1, 2, 3].sum() // Output: 6
*/

Array.prototype.sum = function() {
  for (let i = 0; i < this.length; i++) {
    if (typeof this[i] !== 'number') {
      throw new Error('Target array must contain numbers only');
    }
  }

  return this.reduce((acc, curr) => acc + curr);
};

console.log([1, 2, 3].sum());
try{
  console.log([1, 5, 'test'].sum());
}catch (e){
  console.log(e);
}


/*
  2. When trying to convert an object to string, the output is always '[object object]'.
  a. Change the default output for all objects to be 'This is an object'.
    const obj = {};
    String(obj); // Output: 'This is an object'.

 b. Make String(obj) of only the following object return the content of the message while the all other objects still return 'This is an object'.
    const obj = { message: 'This is a message' };
    String(obj) // Output: 'This is a message'.
*/

String = (obj)=>{
  if (Object.keys(obj).length === 0){
    console.log("This is an object");
  } else if ("message" in obj) {
    console.log(obj["message"]);
  }
}
const obj1 = {};
const obj2 = { message: "This is a message" };

String(obj1);
String(obj2);

/*
3.
  a. You're developing a game which has different types of animals. All animals can walk, run,
  eat and attack. They also have color and weight properties.
  The game also has birds which do all these actions in addition to flying.
  Represent this data using OOP. 
  
  Notes:
  - Write the code twice; using ES5 function constructors and using ES6 classes.
  - Leave the implementation of the 'walk', 'run', 'eat' and 'attack' methods empty
  or write a console.log statement inside each of them.
  - Maintain the count of all created animals in the code and limit the number of
  total created animals to 100. Throw an error if the code tries to create the 101st animal.

  b. Write a function that detects whether an animal is a bird or not.
  isBird(animal) // Output: true or false.
*/

//ES5:

// Animal constructor
function Animal_ES5(color, weight) {
  this.color = color;
  this.weight = weight;
  // Keep track of total created animals
  if (Animal_ES5.count >= 100) {
    throw new Error('Cannot create more than 100 animals');
  } else {
    Animal_ES5.count++;
  }

  // Methods for all animals
  this.walk = function() {}; // or console.log('Walking...'); 
  this.run = function() {}; // or console.log('Running...'); 
  this.eat = function() {}; // or console.log('Eating...'); 
  this.attack = function() {}; // or console.log('Attacking...');  

}

// Keep track of total created animals (static property)  
Animal_ES5.count = 0; //Animal_ES5.prototype

// Bird constructor - inherits from Animal constructor  
function Bird_ES5 (color, weight) {

  Animal_ES5.call(this, color, weight);
  this.fly = function() {};      

}

// set Bird's prototype to a new instance of Animal prototype object and set constructor property on it
Bird_ES5.prototype = Object.create(Animal_ES5.prototype);

// Detect whether an animal is a bird or not    
function isBird_ES5(animal) {    
  return animal instanceof Bird_ES5;    
}

let cat1=new Animal_ES5('brown','2 KG');
console.log(cat1);


//ES6:  
class Animal_ES6 {
  constructor(color, weight) {
    this.color = color;
    this.weight = weight;
    if (Animal_ES6.count >= 100) {
      throw new Error('Cannot create more than 100 animals!');
    } else {
      Animal_ES6.count++;
    }
  }

  walk() {}
  run() {}
  eat() {}
  attack() {}

  static count = 0;
}

class Bird_ES6 extends Animal_ES6 {

  constructor(color, weight) { 

    super(color, weight);
    this.flying = true;
  }

  fly() {}
}

function isBird_ES6(animal) {
  return animal instanceof Bird_ES6;
}

let cat2=new Animal_ES6('white', '5 kg');
console.log(cat2);