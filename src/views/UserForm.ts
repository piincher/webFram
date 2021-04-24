export class UserForm {
	constructor(public parent: Element) {}
	eventsMap(): { [key: string]: () => void } {
		return {
			'click:button': this.onButtonClick
		};
	}
	onButtonClick(): void {
		console.log('hi there ');
	}
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
		this.parent.appendChild(templateElement.content);
	}
}
