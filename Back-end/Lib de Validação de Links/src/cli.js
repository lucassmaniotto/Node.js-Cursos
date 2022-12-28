#!/usr/bin/env node

import chalk from 'chalk';
import getFile from './index.js';
import fs from 'fs';
import validatedList from './http-validation.js';

const path = process.argv;

async function printList(validate, result, identifier = ''){
    if (validate) {
        console.log(
            chalk.yellow('Validated List'), 
            chalk.black.bgGreen(identifier),
            await validatedList(result)
        );
    }
    else {
        console.log(
            chalk.yellow('Links List'), 
            chalk.black.bgGreen(identifier),
            result
        );
    }
    
}

async function processText(args){
    const path = args[2];
    const validate = args[3] === '--validate';

    try {
        fs.lstatSync(path);    
    } 
    catch (error) {
        if (error.code === 'ENOENT'){
            console.log(chalk.red('Archive or directory do not exist '));
            return;
        }
    }

    if (fs.lstatSync(path).isFile()){
        const results = await getFile(args[2]);
        printList(validate, results);
    }
    else if (fs.lstatSync(path).isDirectory()){
        const archives = await fs.promises.readdir(path);
        archives.forEach(async (archiveName) => {
            const list = await getFile(`${path}/${archiveName}`);
            printList(validate, list, archiveName);
        })
    }
}

processText(path);