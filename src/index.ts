import { User } from "./modals/User";

const user = new User({ id: 3, name: "new user" });

user.on("save", () => {
  console.log(user);
});

user.save();
