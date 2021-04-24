export class UserForm {
	constructor(public parent: Element) {}

	template(): string {
		return `
        <div>
        <h1>form</h1>
        <input/>
        </div>
        `;
	}
}
