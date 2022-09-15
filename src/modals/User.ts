import { Collection } from "./Collection";
import { ApiSync } from "./ApiSync";
import { Eventing } from "./Eventing";
import { Attributes } from "./Attributes";
import { Model } from "./Model";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
const rootUrl = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  static buildBuild(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
      User.buildBuild(json)
    );
  }
}
