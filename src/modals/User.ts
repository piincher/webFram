import { Eventing } from "./Eventing";
import axios, { AxiosResponse } from "axios";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
const rootUrl = "http://localhost:3000/users";

export class User {
  event: Eventing = new Eventing();
  sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  attributes: Attributes<UserProps>;
  constructor(attr: UserProps) {
    this.attributes = new Attributes<UserProps>(attr);
  }
  get on() {
    return this.event.on;
  }

  get trigger() {
    return this.event.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: UserProps) {
    this.attributes.set(update);
    this.event.trigger("change");
  }

  fetch(): void {
    const id = this.get("id");

    if (typeof id !== "number") {
      throw new Error("cannot fetch without an id");
    }
    this.sync
      .fetch(id)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      })
      .catch((err) => console.log(err));
  }

  save(): void {
    this.sync.save(this.attributes.getAll).then((response: AxiosResponse) => {
      this.trigger("save");
    });
  }
}
