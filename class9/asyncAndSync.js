function callback(data) {
  console.log(data);
}
function getIntro(name, fn) {
  // return after 1000 ms
  setTimeout(() => {
    fn(`Hi my name is ${name}`);
  }, 1000);
  // return immediately
}
// if I make a callback function
// which accepts data and store it or prints
getIntro("yash", callback);


let arr = new Array(20);

console.log(arr.length);