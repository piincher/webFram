import axios, { AxiosPromise, AxiosResponse } from 'axios';
interface HasAndId {
	id?: number;
}
export class ApiSync<T extends HasAndId> {
	constructor(public rootUrl: string) {}
	fetch(id: number): AxiosPromise {
		return axios.get(`${this.rootUrl}/${id}`);
	}

	save(data: T): AxiosPromise {
		const { id } = data;
		if (id) {
			//put
			return axios.put(`${this.rootUrl}/${id}`, data);
		} else {
			return axios.post(this.rootUrl, data);
		}
	}
}
