import { User } from './models/User';
const user = new User({ name: 'bintou', age: 232 });

user.save();
user.events.on('change', () => {
	console.log('change!');
});
user.events.trigger('change');
