import getUserFull from './getUserFull';
import * as Mutations from './mutations';
import * as Queries from './queries';
import * as Subscriptions from './subscriptions';

const GraphQL2 = {
	...Mutations,
	...Queries,
	...Subscriptions,
	getUserFull,
};

export default GraphQL2;
