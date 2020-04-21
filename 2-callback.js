// setTimeout(() => {
//   console.log("runned");
// }, 2000);

// const arr = ["sachin", "sahu"];

// const name = arr.filter((name) => name.length > 4);

// const geoCode = (location, callback) => {
//   setTimeout(() => {
//     const obj = {
//       latitude: "12.44",
//       longitude: "34.9090",
//     };

//     callback(obj);
//   }, 2000);
// };

// geoCode("Hyderabad", (data) => {
//   console.log(data);
// });

const addSum = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 3000);
};

addSum(1, 4, (dt) => {
  console.log(dt);
});
