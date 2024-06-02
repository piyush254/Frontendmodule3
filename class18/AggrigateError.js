// AggregateError is a way of combining errors in JS;
// and it's used in promise.any
const err = new AggregateError(["e1", "e2"]);
console.log(err.errors);