function GenPromise(condition, reason1, reason2, time) {
  return new Promise((response, reject) => {
    setTimeout(() => {
      if (condition) {
        response(reason1);
      } else {
        reject(reason2);
      }
    }, time);
  });
}


const p1 = new GenPromise(true, 'p1 response succcessful' , ' p1 rejected' , 1000)
const p2 = new GenPromise(false, 'p2 response succcessful' , ' p2 rejected' , 1000)
const p3 = new GenPromise(true, 'p3 response succcessful' , ' p3 rejected' , 1000)



const pAllsettled = Promise.allSettled([p1 , p2 , p3])
.then((data) => console.log(data));