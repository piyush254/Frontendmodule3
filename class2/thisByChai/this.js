// const user = {
//   userName: "Piyush",
//   price: "999",
//   welcome: function () {
//     console.log(`${this.userName} Welcome to website`);
//     console.log(this);
//   },
// };


// user.welcome()

// console.log(this);
// user.userName = 'Baigan';
// user.welcome()



const addTwo = (num1 , num2) => ( num1 + num2 );

const user = {
  userName: "Piyush",
  price: "999",
  welcome: function () {
    // console.log(`${this.userName} Welcome to website`);
    console.log(this);
  },
};


console.log(addTwo(5,8));

user.welcome()