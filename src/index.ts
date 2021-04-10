import { User } from './models/User';

const user = new User({ name: 'myname', age: 22 });

user.on('change', () => {
	console.log('change 1');
});
user.on('change', () => {
	console.log('change2');
});

user.trigger('change');
