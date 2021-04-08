interface UserProps {
	name?: string;
	age?: number;
}

type CallBack = () => {};
export class User {
	events: { [key: string]: CallBack[] };
	constructor(private data: UserProps) {}

	get(propsName: string): number | string {
		return this.data[propsName];
	}

	set(update: UserProps): void {
		Object.assign(this.data, update);
	}

	on(eventName: string, callBack: CallBack) {}
}
