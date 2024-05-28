const normal_Count = document.querySelector('.n_cont')
const Throtlle_Count = document.querySelector('.t_cont')
let count = 0;
const showCount = () => {
  count ++;
  NormalCount();
}

const NormalCount = ()=> {
count ++;
normal_Count.innerHTML `Normal Count ${count}`
}