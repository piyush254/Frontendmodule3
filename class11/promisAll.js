function gernatePromise(condition, response, reject, time) {
  return new Promise((response, reject) => {
    setTimeout(() => {
      if (condition) {
        response(response);
      } else {
        reject(reject);
      }
    }, time);
  });
}


const p1 = gernatePromise(true ,  "response" , "reject" , 1000)
console.log(p1);