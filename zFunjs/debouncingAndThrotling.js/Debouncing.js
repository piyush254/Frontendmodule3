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

document.getElementById('debounce-input').addEventListener('input', BetterFunction);
