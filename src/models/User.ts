interface UserProps {
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
}
