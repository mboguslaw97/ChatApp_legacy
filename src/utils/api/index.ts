import * as Mutations from './mutations';
import * as Queries from './queries';
import * as Subscriptions from './subscriptions';

const API = {
	...Mutations,
	...Queries,
	...Subscriptions,
};

export default API;
