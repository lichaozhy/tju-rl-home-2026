import * as fs from 'node:fs';
import * as path from 'node:path';
import * as crypto from 'node:crypto';

export function ensureDirectory(pathname) {
	if (!fs.existsSync(pathname)) {
		fs.mkdirSync(pathname, { recursive: true });
	}
}

export function Hash(buffer) {
	const hash = crypto.createHash('MD5');

	hash.update(buffer);

	return hash.digest('hex');
}

export function writeFile(pathname, data) {
	const dirname = path.dirname(pathname);

	ensureDirectory(dirname);
	fs.writeFileSync(pathname, data);
}
