function Closur() {
  let i = 0;
  function count() {
    i++;
    console.log(i);
  };
  count.reset = function () {
    i = 0;
  };
  return  count ;
}

let count = Closur();

count();
count();
count();
count(100)
count.reset()
count();
count();
count();



// function defination or function refrance me kya difference hai