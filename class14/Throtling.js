function Throttle(callback, delay) {
  let flag = true;
  return function () {
    if (flag) {
      callback();
      flag = false;
    }
    setTimeout(() => {
      flag = true;
    }, delay);
  };
}
