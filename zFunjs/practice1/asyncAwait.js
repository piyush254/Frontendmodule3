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

// Await can use only inside asyc function only

async function handlePromise() {
  console.log("Hello WebDev");
  const val = await p;
  console.log("Namaskar JavaScript val");
  console.log(val);
// Suspend after the fullfilling of promise p

  const val2 = await p2;
  console.log("Namaskar JavaScript for val2");
  console.log(val2);
}

handlePromise();

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

