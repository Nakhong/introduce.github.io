const arr = ["A", "B", "C", "A", "B"];

const newArr = [];
arr.forEach((element) => {
  if (!newArr.includes(element)) {
    newArr.push(element);
  }
});
console.log(newArr);
