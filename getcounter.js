/*
class Counter{
  // # is used for making private
  #count = 0 ;
  increment(){
    this.#count++;
  }
  get count(){
    return this.#count;
  }
}

const counter1 = new Counter();

counter1.increment();

console.log(counter1.count);

// console.log(counter1.#count);
*/

/*
class Counter {
  // Private field
  #count = 0;

  // Public method to increment count
  increment() {
    this.#count++;
  }

  // Public method to get current count
  get getCount() {
    return this.#count;
  }
}

const counter = new Counter();

counter.increment();
console.log(counter.getCount); // Output: 1

*/

class count{
  #id ;
  constructor(name , id = Math.floor(Math.random()*10)){
    this.name = name
    this.#id = id;
  }
  get id(){
    return this.#id;
  }
  set id(_id){
    this.#id = _id;
  }
}
const count1 =new count("Piyush" , 20);
console.log(count1.name);
count1.id = 30;
console.log(count1.id);