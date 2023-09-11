// Bundling of two or more functions
// Where inner function has acess to properties and methods of outer function even after execution of external fn is done
//can be accesed anywhere in scope unless they are overriden
const demo = () => {
  const name = "kritica";
  return function check() {
    return name;
  };
};
const res = demo();
console.log("res", res());

// passing variables
function x(a) {
  function y(b) {
    function z(c) {
      return a + b + c;
    }
    return z;
  }
  return y;
}
const a = x(10);
const b = a(20);
const c = b(30);
console.log("c", c);
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, curr) => curr + acc, 0);
