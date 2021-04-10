import axios, { AxiosResponse } from 'axios';
interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

type CallBack = () => void;
export class User {
	events: { [key: string]: CallBack[] } = {};
	constructor(private data: UserProps) {}

	get(propsName: string): number | string {
		return this.data[propsName];
	}

	set(update: UserProps): void {
		Object.assign(this.data, update);
	}

	on(eventName: string, callback: CallBack): void {
		const handlers = this.events[eventName] || [];
		handlers.push(callback);
		this.events[eventName] = handlers;
	}

	trigger(eventName: string): void {
		const handlers = this.events[eventName];

		if (!handlers || handlers.length === 0) {
			return;
		}
		handlers.forEach((callBack) => {
			callBack();
		});
	}
	fetch(): void {
		axios.get(`http://localhost:3000/users/${this.get('id')}`).then((response: AxiosResponse): void => {
			this.set(response.data);
		});
	}
}
