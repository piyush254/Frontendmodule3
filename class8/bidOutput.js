let info = {
  name : "Piyush",
  city : "Delhi"
}


function intro(company , designation){
  console.log(this.name + ' ' + this.city + ' ' +company+' '+designation);
}

intro.call(info , 'Google' , 'Ggn');