import { User } from './models/User';

const user = new User({ name: 'myname', age: 22 });

user.on('change', () => {});
console.log(user);
