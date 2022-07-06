import chalk from 'chalk';
import fs from 'fs';

const log = console.log;

function treatError(error){
	throw new Error(chalk.red(error.code, `There's no file in this path.`));
}

async function readFile(filePath){
	const encoding = 'utf-8';
	try {
		const text = await fs.promises.readFile(filePath, encoding);
		log(chalk.green(text));
	} catch (error) {
		treatError(error);
	}
}

// function readFile(filePath){
// 	const encoding = 'utf-8';
// 	fs.promises.readFile(filePath, encoding)
// 		.then((text) => log(chalk.green(text)))
// 		.catch((error) => treatError(error));
// }

// function readFile(filePath){
// 	const encoding = 'utf-8';
// 	fs.readFile(filePath, encoding, (error, text) => {
// 		if(error){
// 			treatError(error);
// 		}		
// 		log(chalk.green(text));
// 	});
// }

readFile('./files/texto1.md');