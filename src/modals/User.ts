import { Eventing } from "./Eventing";
import axios, { AxiosResponse } from "axios";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  event: Eventing = new Eventing();
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
