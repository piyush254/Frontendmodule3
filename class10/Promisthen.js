const p1 = new Promise(function (resolve, reject) {
  const conditon = true;
  if (conditon) {
    resolve("P1 is resove");
  } else {
    reject("p1 is rejected");
  }
});

p1.then(() => {
  console.log("Promis is solved");
}).catch((err) => {
  console.log("Promise is rejected");
});
