import chalk from 'chalk';
import fs from 'fs';

const log = console.log;

function treatError(error){
	throw new Error(chalk.red(error.code, `There's no file in this path.`));
}

function extractLinks(text){
	const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
	const arrayResult = [];
	let temp;

	while((temp = regex.exec(text)) !== null){
		arrayResult.push({[temp[1]]:[temp[2]]});
	}
	if(arrayResult.length === 0){
		return `No valid links found.`;
	}
	return arrayResult;
}

export default async function readFile(filePath){
	const encoding = 'utf-8';
	try {
		const text = await fs.promises.readFile(filePath, encoding);
		return extractLinks(text);
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

// readFile('./files/texto1.md');