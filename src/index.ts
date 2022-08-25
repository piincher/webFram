import { User } from "./modals/User";

const user = new User({ name: "piincher", age: 20 });
user.on("change", () => {
  console.log("event 1");
});
user.on("save", () => {
  console.log("event 2");
});
user.trigger("change");
console.log(user);
user.set({ name: "storm", age: 199 });
console.log(user.get("name"));
console.log(user.get("age"));
