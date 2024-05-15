const arr = [1, 2, [3, 4], [5, [6, 7, [8, 9]]]];

function flatData(data) {
  const ar = [];

  if (Array.isArray(data)) {
    data.forEach((element) => {
      ar.push(...flatData(element));
    });
  } else {
    ar.push(data);
  }
  return ar;
}

console.log(flatData(arr));
