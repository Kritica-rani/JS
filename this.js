// the value of this is decided on the basis of how it is invoked
//u
// console.log("before", this);
// function Demo() {
//   this.abc = "xyz";
//   this.displayName = function () {
//     console.log("hey", this.abc);
//   };
// }

// console.log("after", this);
// console.log("this.bog", this.abc);

// const name = {
//   name: "kritica",
//   displaName: function () {
//     this.blog = "hello";
//     console.log("this", this.blog);
//   },
// };

function Demo(value) {
  if (!(this instanceof Demo)) {
    throw Error(`cannot be invoked direclty`);
  }
  (this.add = value),
    (displayValue = function () {
      console.log(this.add);
    });
}
const demo = new Demo("24");
console.log("this", demo.add);
