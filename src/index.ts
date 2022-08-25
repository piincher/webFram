import { User } from "./modals/User";

const user = new User({ name: "piincher", age: 20 });

console.log(user.get("name"));
console.log(user.get("age"));
