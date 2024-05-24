let displaydiv = document.querySelector(".divContainer");

function displayfun(data) {
  console.log(data);
  data.forEach((element) => {
    const heading = document.createElement("h1");
    heading.setAttribute("class", "header");
    heading.innerText = element.id + ". " + element.title;
    displaydiv.append(heading);
  });
}

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((data) => data.json())
  .then((data) => displayfun(data))
  .catch((err) => console.log(err));
