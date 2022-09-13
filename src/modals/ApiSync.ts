import { AxiosPromise } from "axios";
import axios from "axios";
import { UserProps } from "./User";

interface HasId {
  id?: number;
}
export class ApiSync<T extends HasId> {
  constructor(public url: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.url}/users/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      return axios.put(`${this.url}/${id}`, data);
    } else {
      return axios.post(`${this.url}/users/`, data);
    }
  }
}
