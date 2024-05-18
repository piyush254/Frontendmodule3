let info = {
  name : "Piyush",
  city : "Delhi",
}


function intro(company , designation){
  console.log(this.name + ' ' + this.city + ' ' +company+' '+designation);
}

// intro.call(info , 'Google' , 'Ggn');

const intro2 = intro.call(info ,"TCS" , "Manager");

const intro1 = intro.bind(info ,"TATA" );

intro1("Engineer" , "HR");