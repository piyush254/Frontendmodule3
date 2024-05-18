let user = {
  name : "Satyam"
}

function intro (city , company){
  console.log(this.name +" "+ city + " " + company);
}
/*

intro.call(user , "Walmart" , "Banglore");
intro.call(user , "Hydrabad" , "Microsoft");
intro.call(user , "USA" , "Apple");

*/

/*

const intro2 = "Some logic"  // this intro2 having  defination of intro and this keyword as user object

intro2('blr' , "Walmart") // this have to behave as intro2.call (user , "blr" , "walmart")
intro2('hyd' , "Microsoft") // this have to behave as intro2.call (user , "blr" , "walmart")
intro2('USA' , "Apple") // this have to behave as intro2.call (user , "blr" , "walmart")


*/

// we have bind  method function which give intro2 function 


// const intro2 = intro.bind(user);

// call invokes function immediately 
//  but bind give a higher order function when invokes it behaves like a call method

const intro2 = intro.bind(user , "Allen" , "Kota")

intro2("delhi" , "paytm");
intro2();










/*

function test() {
  console.log("This is a test function");
}

function hof() {
  return test();
}

hof()

*/