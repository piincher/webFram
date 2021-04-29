import { View } from './View';
import { User, UserProps } from '../models/User';
export class UserForm extends View<User, UserProps> {
	eventsMap(): { [key: string]: () => void } {
		return {
			'click:.set-age': this.onSetAgeClick,
			'click:.set-name': this.onSetNameClick,
			'click:.save-model': this.onSaveClick
		};
	}
	onSaveClick = (): void => {
		this.model.save();
	};
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
        <input placeholder="${this.model.get('name')}"/>
		<button class="set-name">change name</button>
		<button class="set-age"> set  random number </button>
		<button class="save-model">Save User</button>
        </div>
        `;
	}
}
