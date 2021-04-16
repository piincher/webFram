export class Attribut<T> {
	constructor(private data: T) {}

	get(propsName: string): number | string {
		return this.data[propsName];
	}

	set(update: T): void {
		Object.assign(this.data, update);
	}
}
