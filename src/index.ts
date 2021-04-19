import { User } from './models/User';
const user = new User({ id: 1, name: 'storm', age: 76 });

user.on('save', () => {
	console.log(user);
});

user.save();
