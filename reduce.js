const arr = [4, 4.9, 1.1, 2.1, 3, 1.2];

const segregate = arr.reduce((acc, curr) => {
  const newValues = Math.floor(curr);
  if (!acc[newValues]) {
    acc[newValues] = [];
  }
  acc[newValues].push(curr);
  return acc;
}, {});
console.log("segre", segregate);

const arr1 = [1, 2, 3, 4, 5];
const segregated = arr1.reduce((acc, curr) => {
  const key = curr % 2 === 0 ? "even" : "odd";
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(curr);
  return acc;
}, {});

console.log(segregated);
