import fs from 'fs';
import chalk from 'chalk';

function errorTreatment(error) {
    throw new Error(chalk.red(error.code, 'no such file or directory'));
}

/* Síncrona
function getFile(dir) {
    const encoding = 'utf-8';
    fs.readFile(dir, encoding, (error, text) => {
        if (error) {
            errorTreatment(error);
        }
        console.log(chalk.green(text));
    });
}
*/

/* Assíncrona - promise com .then
function getFile(dir) {
    const encoding = 'utf-8';
    fs.promises
        .readFile(dir, encoding)
        .then((text) => console.log(chalk.green(text)))
        .catch(errorTreatment);
}
*/

// Assíncrona - async/await
async function getFile(dir) {
    try {
    const encoding = 'utf-8';
    const text = await fs.promises.readFile(dir, encoding);
    return extractLink(text);
    } 
    catch (error) {
        errorTreatment(error);
    }
}

function extractLink(text){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capture = [...text.matchAll(regex)];
    const results = capture.map(capture => ({[capture[1]]: capture[2]}));
    return results.length !== 0 ? results : 'there are no links in the archive';
}

export default getFile;