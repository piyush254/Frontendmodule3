// Initialize id and cache
let id = 0;
let cache = {};

function mySetInterval(callback, delay) {
    let intervalId = id++; // Increment id to get a unique intervalId
    function repeat() {
        cache[intervalId] = setTimeout(() => {
            callback();
            repeat(); // Call repeat function recursively
        }, delay);
    }
    repeat(); // Start the first timeout
    return intervalId; // Return the intervalId
}
let myinter = setInterval(()=> {
  console.log("Hello World");
},1000)

console.log(myinter);
setTimeout(() => {
  clearInterval(myinter);
  console.log("Interval clear");
}, 10 * 1000);