import chalk from 'chalk';
import fs from 'fs';

const log = console.log;

function readFile(filePath){
	const encoding = 'utf-8';
	fs.readFile(filePath, encoding, (_, text) => {
		log(chalk.green(text));
	});
}

readFile('./files/texto1.md');