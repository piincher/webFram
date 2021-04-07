interface UserProps {
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
}
