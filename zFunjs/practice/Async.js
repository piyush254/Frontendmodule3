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

 let time  = document.querySelector("#time1");
const intervalMe =  setInterval(() => {
  const now = new Date();
  time.innerHTML = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
  console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
}, 1000);


document.querySelector("#stop").addEventListener('click', ()=>{
  console.log("Interval is is stop");
  time.innerHTML = `You stop time`
  clearTimeout(intervalMe);
 })