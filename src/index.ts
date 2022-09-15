import { User, UserProps } from "./modals/User";
import { Collection } from "./modals/Collection";
import axios, { AxiosResponse } from "axios";

const collection = User.buildUserCollection();

collection.on("change", () => {
  console.log(collection);
});
collection.fetch();
