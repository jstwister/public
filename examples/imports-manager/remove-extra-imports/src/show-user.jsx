import { getActiveUsers } from './utils.js';
import type { UserType } from './types.js';
import User from './user.js';

const ShowUser = (user: UserType) => (
<div>
    {user.name}
    Active users:
    { getActiveUsers([new User({ name: 'John', active: 1 }), new User({name: 'Jack', active: 0 }) ]) }
</div>);
