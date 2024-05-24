// get Intro
// getCompany
// getCity
function getIntro(condition, name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (condition) {
        resolve(`Hi my name is ${name}`);
      } else {
        reject("rejected");
      }
    }, 5000);
  });
}

function getCity(condition, city) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (condition) {
        resolve(`I am living in ${city}`);
      } else {
        reject("rejected");
      }
    }, 5000);
  });
}

function getCompany(condition, company) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (condition) {
        resolve(`I am working in ${company}`);
      } else {
        reject("rejected");
      }
    }, 5000);
  });
}

const person1 = new getIntro(true, "Piyush");

// person1
// .then((data)=> console.log(data))
// .catch((err) => (console.log(err)));

const person2 = new getCompany(true, "Google");

// person2
// .then((data)=> console.log(data))
// .catch((err) => (console.log(err)));

const person3 = new getCity(true, "Delhi");

// person3
// .then((data)=> console.log(data))
// .catch((err) => (console.log(err)));

getIntro(true, "Anuj")
  .then((data) => {
    console.log(data);
    return getCompany(true, "ubar");
  })
  .then((data) => {
    console.log(data);
    return getCity(true, "Delhi");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("Executation commpleted");
  });
