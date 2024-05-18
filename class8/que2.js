function createCounter() {
  return {
    i: -1,
    count() {
      this.i++;
      console.log(this.i);
    },
    get count() {
      this.i++;
      console.log(this.i);
      return this._i++;
    },
    set count(value) {
      this._i = value;
    },
  };
}

const count = createCounter();

count.count;
count.count;
count.count = 100;
count.count;
// console.log(count.count);
// console.log(count.count);
count.count;
count.count;
