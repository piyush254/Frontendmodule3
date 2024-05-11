// let myName = "Piyush     "
// let myChannel = "Chai     "
// console.log(myName.trueLength);

let myHeros = ["Thor", "Spiderman"];

let heroPower = {
  Thor: "Hammer",
  Spiderman: "sling",
  getSpiderPower: function () {
    console.log(`spider power is ${this.getSpiderman}`);
  },
};

Object.prototype.Piyush = function () {
  console.log(`Piyush is present in all objects ${new Date()}`);
};

heroPower.Piyush();
let arr = [];
setTimeout(() => {
  arr.Piyush();
}, 1000);
myHeros.Piyush();
// getSpiderPower.Piyush();
 const user = {
  name : "Chai",
  email : "Chai@google.com"
 }

const Teacher = {
  makeVideo : true,
}


const teachingSupport = {
  isAvailable : false,
}


const taSupport ={
  makeAssignment : 'JS assesment',
  fullTime : true,
  __proto__ : teachingSupport,
}

Teacher.__proto__ = user;


// Modern Syntex

Object.setPrototypeOf(teachingSupport,Teacher)


let anotherUsernasme = "ChaiAurCode     "


String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`True length is ${this.trim().length}`);
}


anotherUsernasme.trueLength();
"Piyush".trueLength();
"iceTea".trueLength();