const fs = require("fs");
const dataBuffer = fs.readFileSync("1-json.json");
const data = dataBuffer.toString();
const user = JSON.parse(data);

user.title = "meaningful mind";
user.age = 23;

const userAdd = JSON.stringify(user);
fs.writeFileSync("1-json.json", userAdd);
