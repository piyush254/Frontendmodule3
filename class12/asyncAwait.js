// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(res => res.json())
// .then(res => res.)



function getName() {
  return "Ankit"
}

async function getData() {
  console.log("inside get data");
  const response = await getName();
  console.log(response);
  console.log('After inside data');
}

console.log('before execution');
getData();
console.log('After Execution');