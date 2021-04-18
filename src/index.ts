import { User } from './models/User';
const user = new User({ name: 'bintou', age: 232 });
console.log(user.get('name'));

user.on('change', () => {
	console.log('user was changed');
});

user.set({ name: 'piincher' });
