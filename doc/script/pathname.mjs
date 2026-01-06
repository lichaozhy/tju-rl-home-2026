import * as path from 'node:path';

const { dirname } = import.meta;

export default {
	WORKSPACE: path.join(dirname, '../'),
	DOCUMENT: path.join(dirname, '../root'),
	TARGET: {
		ASSETS: path.join(dirname, '../../web/public/html/assets'),
		HTML: path.join(dirname, '../../web/public/html'),
		DATA: path.join(dirname, '../../web/src/data.json'),
	},
};
