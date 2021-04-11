import axios, { AxiosResponse } from 'axios';
interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

export class User {
	constructor(private data: UserProps) {}

	get(propsName: string): number | string {
		return this.data[propsName];
	}

	set(update: UserProps): void {
		Object.assign(this.data, update);
	}

	fetch(): void {
		axios.get(`http://localhost:3000/users/${this.get('id')}`).then((response: AxiosResponse): void => {
			this.set(response.data);
		});
	}

	save(): void {
		const id = this.get('id');
		if (id) {
			//put
			axios.put(`http://localhost:3000/users/${id}`, this.data);
		} else {
			axios.post('http://localhost:3000/users', this.data);
		}
	}
}
