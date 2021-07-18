import * as Mutations from './mutations';
import * as Queries from './queries';
import * as Subscriptions from './subscriptions';

const Backend = {
	...Mutations,
	...Queries,
	...Subscriptions,
};

export default Backend;
