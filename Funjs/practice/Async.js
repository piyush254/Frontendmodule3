// Blocking code vs NON BLocing code.
// Blocking code block whole code of a programme.

// Read file Synchronous
/*

// setTimeout
function syaHello() {
  console.log("I am saying hello to you");
}

 const changeMe = setTimeout(syaHello, 2000);


 document.querySelector("#stop").addEventListener('click', ()=>{
  console.log("Timeout is stop");
  clearTimeout(changeMe);
 })



 */

//setInterval


const intervalMe =  setInterval(() => {
  const now = new Date();
  console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
}, 1000);


document.querySelector("#stop").addEventListener('click', ()=>{
  console.log("Interval is is stop");
  clearTimeout(intervalMe);
 })