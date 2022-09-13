import { User } from "./modals/User";

const user = User.buildBuild({ id: 2 });

user.on("save", () => {
  console.log(user);
});

user.fetch();
