import { View } from './View';
export class UserForm extends View {
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
}
