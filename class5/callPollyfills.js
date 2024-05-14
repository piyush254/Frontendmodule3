

Function.prototype.call = function(object, ...restPara){
  // This keyword story
  object.tempfn = this;
}


fn.call(obj,alpha , beta , gama);

fn(...restPara)

