let arr = [
  {
    id: 1,
    price: 250,
  },
  {
    id: 2,
    price: 350,
  },
  {
    id: 3,
    price: 450,
  },
  {
    id: 4,
    price: 550,
  },
  {
    id: 5,
    price: 650,
  },
  {
    id: 6,
    price: 750,
  },
];
// console.log(arr);

let retvalue = arr.map((item) => item).filter((item) => item.id >= 2);

// console.log(retvalue);

const intitalvalue = 250;

/* The code `const reducarr = arr.reduce((accumulator, currentvalue) => {
  return accumulator + currentvalue.price;
}, intitalvalue);` is using the `reduce` method on the `arr` array to calculate the total sum of
prices in the array. */
const reducarr = arr.reduce((accumulator, currentvalue) => {
  // console.log(
  //   `Accumulator:${accumulator}  currentvalue:${currentvalue.price} `
  // );
  return accumulator + currentvalue.price;
}, intitalvalue);
// console.log(reducarr);

let delval = 2;

let afterdel = arr.filter((val) => {
  return val.id != 2;
});

// console.log(afterdel);

// afterdel.forEach((value) => {
//   console.log(`id : ${value.id}   price : ${value.price}`);
// });



// Next Concept    
