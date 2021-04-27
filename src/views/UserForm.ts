import { User } from '../models/User';
export class UserForm {
	constructor(public parent: Element, public model: User) {
		this.bindModel();
	}
	bindModel = (): void => {
		this.model.on('change', () => {
			this.render();
		});
	};
	eventsMap(): { [key: string]: () => void } {
		return {
			'click:.set-age': this.onSetAgeClick,
			'click:.set-name': this.onSetNameClick
		};
	}
	onSetNameClick = (): void => {
		const input = this.parent.querySelector('input');
		if (input) {
			const name = input.value;
			this.model.set({ name });
		}
	};

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
		<button class="set-name">change name</button>
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
		this.parent.innerHTML = '';
		const templateElement = document.createElement('template');
		templateElement.innerHTML = this.template();
		this.bindEvents(templateElement.content);
		this.parent.appendChild(templateElement.content);
	}
}
