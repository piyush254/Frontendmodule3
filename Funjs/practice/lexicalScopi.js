/*   function init() {
  let name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  displayName();
}
// init();

function Outer() {
  let username = "Piyush";

  function innerFunction() {
    let secretkey = "key123";
    console.log("TOO INNNER", username);
    console.log(`secret key ${secretkey}`);
  }

  function innerFunction2() {
    console.log(`inner Two ${username}`);
    // console.log(`secret key ${secretkey}`);
  }
  innerFunction();
  innerFunction2();
}

Outer();

// console.log("TOO OUTER", username);  */

// Closures

/*

function mkFun(){
  const name = "Piyush";
  function displayName (){
    console.log(name);
  }
  return displayName;
}

const myfun = mkFun();
myfun();

*/

function handleClick(color) {

  return function () {
    document.body.style.backgroundColor = `${color}`;
  };
}


document.querySelector("#orange").onclick = handleClick("orange");

document.querySelector("#red").onclick = handleClick("red");
