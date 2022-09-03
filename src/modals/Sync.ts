import { AxiosPromise } from "axios";
import axios from "axios";
import { UserProps } from "./User";
export class Sync {
  constructor(public url: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.url}/users/${id}`);
  }

  save(data: UserProps): AxiosPromise {
    const { id } = data;
    if (id) {
      return axios.put(`${this.url}/${id}`, data);
    } else {
      return axios.post(`${this.url}/users/`, data);
    }
  }
}
