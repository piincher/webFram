import { AxiosResponse, AxiosPromise } from 'axios';

interface ModelAttributes<T> {
	set(value: T): void;
	getAll(): T;
	get<K extends keyof T>(key: K): T[K];
}
interface Sync<T> {
	fetch(id: number): AxiosPromise;
	save(data: T): AxiosPromise;
}
type CallBack = () => void;

interface Events {
	on(eventName: string, callBack: CallBack): void;
	trigger(eventName: string): void;
}
interface HasId {
	id?: number;
}
export class Model<T extends HasId> {
	constructor(private attributes: ModelAttributes<T>, private events: Events, private sync: Sync<T>) {}
	get on() {
		return this.events.on;
	}
	get trigger() {
		return this.events.trigger;
	}

	get get() {
		return this.attributes.get;
	}

	set(update: T): void {
		this.attributes.set(update);
		this.events.trigger('change');
	}

	async fetch(): Promise<void> {
		const id = this.get('id');
		if (typeof id !== 'number') {
			throw new Error('cannot without id ');
		}
		const response: AxiosResponse = await this.sync.fetch(id);
		this.set(response.data);
	}

	async save(): Promise<void> {
		const { data: AxiosResponse } = await this.sync.save(this.attributes.getAll());
		this.trigger('save');
	}
}
