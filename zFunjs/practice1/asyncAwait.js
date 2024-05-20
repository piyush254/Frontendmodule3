// Async function always return a promise

// if don't return promise then return a value

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value!!");
  }, 10000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value!!");
  }, 20000);
});

/*

async function getData() {
  return p ;
}

const dataPromis = getData();
// console.log(data);

dataPromis.then((response) => {
  console.log(response);
});

*/

/*
// Await can use only inside asyc function only
// This is important
async function handlePromise() {
  console.log("Hello WebDev");
  const val = await p;
  console.log("Namaskar JavaScript for val");
  console.log(val);
// Suspend after the fullfilling of promise p

  const val2 = await p2;
  console.log("Namaskar JavaScript for val2");
  console.log(val2);
}

handlePromise();
*/
// function getData (){
//   p.then(res => {
//     console.log(res)
//   })
// }

// getData()

// function getData(){
//   p.then((res) => {
//     console.log(res)
//   })
//   console.log("Namaskar JavaScript");
// }

// getData()

const Api = "https://api.github.com/users/Piyush254";
// const Api = "https://api.giithub.com/users/Piyush254"

async function handlePromise() {
  try {
    const data = await fetch(Api);
    const jsonvalue = await data.json();
    console.log(jsonvalue);
  } catch (error) {
    console.log(error);
  }
}

handlePromise();
