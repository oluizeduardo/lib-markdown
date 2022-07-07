import chalk from 'chalk';
import readFile from './index.js';
import validateURLs from './http-validation.js';

const path = process.argv;

async function processText(filePath) {
    const result = await readFile(filePath[2]);

    if(filePath[3] === 'validate'){
        console.log(chalk.blue('list of links:'), await validateURLs(result));
    }else{
        console.log(chalk.yellow('list of links:'), result);
    }
}

processText(path);