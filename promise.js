// // create a promsise that will resolve after 5 mins
// function demo() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("over!!");
//     }, 5000);
//   });
// }
// demo()
//   .then((val) => console.log(val))
//   .catch((err) => console.log(err));

// const promise = new Promise((resolve, reject) => {
//   // a promise that will reject after
//   // 5 second
//   setTimeout(() => {
//     reject("Error 404");
//   }, 5000);
// });
// promise.then(null, (error) => {
//   console.error("Called from then method", error);
// });
// // "Called from then method" "Error 404"
// promise.catch((error) => {
//   console.error("Called from catch method", error);
// });

//Async await

const promiseData = Promise.resolve("Hey this is done");

const example = async (promise) => {
  try {
    const res = await promise;
    return res;
  } catch (err) {
    console.log("error in catch-", err);
  } finally {
    console.log("finaly executed");
  }
};
console.log(example(promiseData));
