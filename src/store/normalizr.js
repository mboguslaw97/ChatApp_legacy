// eslint-disable-next-line @typescript-eslint/no-var-requires
const _ = require('lodash');

const normalize = (data, tn, result = {}) => {
	tn = tn ?? data.__typename;
	if ('items' in data) return normalize(data.items, tn, result);
	if ('nextToken' in data) return;
	if (Array.isArray(data)) {
		data.forEach(val => normalize(val, tn, result));
		return result;
	}

	const { id } = data;
	if (id in result) return result;

	result[id] = {};
	Object.entries(data).forEach(([k, v]) => {
		if (typeof v === 'object' && !Array.isArray(v)) {
			if ('items' in v) {
				const k2 = `${k.slice(0, -1)}Ids`;
				result[id][k2] = [];
				v.items.forEach(item => normalize(item, k.slice(0, -1), result));
			} else if (v) {
				normalize(v, k, result);
			}
		} else {
			result[id][k] = v;
			if (tn && typeof v === 'string' && k.slice(-2) === 'Id') {
				const k2 = `${_.camelCase(tn)}Ids`;
				result[v] = result[v] ?? {};
				result[v][k2] = result[v][k2] ?? [];
				result[v][k2].push(id);
			}
		}
	});

	return result;
};

const denormalize = (data, id, fieldSelector) => {
	const result = _.cloneDeep(data[id]);
	if (fieldSelector === {}) return result;

	Object.entries(fieldSelector).forEach(([k, v]) => {
		const id2 = result[k];
		if (!id2) return;
		if (typeof id2 === 'string') {
			const k2 = k.slice(0, -2);
			result[k2] = denormalize(data, id2, v);
		} else {
			const k2 = `${k.slice(0, -3)}s`;
			result[k2] = id2.map(id3 => denormalize(data, id3, v));
		}
	});
	return result;
};

const followPath = (data, id, path = [], i = 0) => {
	const item = data[id];
	if (i === path.length) return item;
	const x = item[path[i]];
	if (!x) return;
	if (typeof x === 'string') return followPath(data, x, path, i + 1);
	return x.map(id2 => followPath(data, id2, path, i + 1));
};

module.exports = { denormalize, followPath, normalize };
