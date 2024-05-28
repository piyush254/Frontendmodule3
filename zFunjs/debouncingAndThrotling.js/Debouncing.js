let counter = 0;

function getData() {
  console.log("Fetching data " + counter++);
}

function myDebouncing(call, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      call(...args);
    }, delay);
  };
}

const BetterFunction = myDebouncing(getData, 300);



const inputElement = document.createElement('input');

inputElement.style.padding = '2%';
inputElement.style.textTransform = 'capitalize';
inputElement.type = 'text';
inputElement.id = 'debounce-input';
inputElement.placeholder = 'Type something...';

document.getElementById('container').append(inputElement);


inputElement.addEventListener('input', BetterFunction);