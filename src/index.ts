import { User } from "./modals/User";

const user = new User({ name: "piincher", age: 20 });

user.event.on("change", () => {
  console.log("chiane");
});
user.event.trigger("change");
