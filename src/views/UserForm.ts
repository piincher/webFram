import { User } from '../models/User';
export class UserForm {
	constructor(public parent: Element, public model: User) {}
	eventsMap(): { [key: string]: () => void } {
		return {
			'click:.set-age': this.onSetAgeClick
		};
	}

	onSetAgeClick = (): void => {
		this.model.setRandomAge();
	};
	template(): string {
		return `
        <div>
        <h1>form</h1>
		<div>User name : ${this.model.get('name')}</div>
		<div> Age :${this.model.get('age')}</div>
        <input/>
		<button>click me</button>
		<button class="set-age"> set  random number </button>
        </div>
        `;
	}

	bindEvents(fragment: DocumentFragment): void {
		const eventsMap = this.eventsMap();

		for (let eventKey in eventsMap) {
			const [ eventName, selector ] = eventKey.split(':');

			fragment.querySelectorAll(selector).forEach((element) => {
				element.addEventListener(eventName, eventsMap[eventKey]);
			});
		}
	}
	render(): void {
		const templateElement = document.createElement('template');
		templateElement.innerHTML = this.template();
		this.bindEvents(templateElement.content);
		this.parent.appendChild(templateElement.content);
	}
}
