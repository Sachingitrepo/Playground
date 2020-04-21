const name = "sachin";
const userAge = 25;
const address = "Hyderabad";
const user = {
  name,
  age: userAge,
  address,
};
// const { name: userName, age = 26 } = user;
// console.log(age);

const call = ({ address }) => {
  console.log(address);
};

call(user);
