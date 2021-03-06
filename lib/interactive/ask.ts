import * as rl from 'readline';

export default (question: string) => {
	const r = rl.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	return new Promise((resolve: (value: string) => void) =>
		r.question(`\x1b[0m\x1b[1m${question}: \x1b[0m`, (a) => {
			r.close();
			resolve(a);
		})
	);
};
