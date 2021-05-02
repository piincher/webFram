import { View } from '../views/View';
import { UserProps, User } from '../models/User';

export class UserShow extends View<User, UserProps> {
	template(): string {
		return `
        <div>
        <h1>User details</h1>
        <div>user name : ${this.model.get('name')}</div>
        <div>Age : ${this.model.get('age')}</div>

        </div>
        `;
	}
}
