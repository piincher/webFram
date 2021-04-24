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

	render(): void {
		const templateElement = document.createElement('template');
		templateElement.innerHTML = this.template();
		this.parent.appendChild(templateElement);
	}
}
