// fetch is a function in js which takes API and give us promise

// This promis can eventually can be error or data

const fetchPromise = fetch("https://jsonplaceholder.typicode.com/todos");

fetchPromise
.then(function(response){
  console.log(response);
  return response
})
.then((data) => {console.log(data.json())})
.catch(err => console.log(err))

// fetch will give us promis which is having data

// this is what we initially thought
// But we saw this