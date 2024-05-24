function gernatePromise(condition, data, reason, time) {
  return new Promise((response, reject) => {
    setTimeout(() => {
      if (condition) {
        response(data);
      } else {
        reject(reason);
      }
    }, time);
  });
}


// Promise all
const p1 = gernatePromise(true, "p1 response", "p1 reject", 1000);
const p2 = gernatePromise(true, "p2 response", "p2 reject", 1000);
const p3 = gernatePromise(true, "p3 response", "p3 reject", 1000);
const p4 = gernatePromise(true, "p4 response", "p4 reject", 1000);

const Promiseall = Promise.all([p1, p2, p3, p4]);

Promiseall
.then((data)=> console.log(data))
.catch((err)=> console.log(err))
.finally(()=>{
  console.log('our Promise code is running')
})

// Promise any

const p5 = gernatePromise(false, "p5 response", "p5 reject", 1000);
const p6 = gernatePromise(false, "p6 response", "p6 reject", 1000);
const p7 = gernatePromise(false, "p7 response", "p7 reject", 1000);
const p8 = gernatePromise(true, "p8 response", "p8 reject", 3000);


const PromiseAny = Promise.any([p5 , p6 , p7 ,p8]);


PromiseAny
.then((data)=>console.log(data))
.catch(err =>console.log(err))
.finally(()=> {console.log('Code executation completed')})