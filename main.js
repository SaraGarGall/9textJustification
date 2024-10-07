/*9. Text Justification: Write a program that justifies a block of text to a specific width by adding spaces between words (similar to word wrap functionality).*/

import { justificationWithSpaces } from './utility.js';
import inquirer from 'inquirer';

let blockOfText = await inquirer.prompt([{
        type: "input",
        name:  "input",
        message: "type the block of text you want to justify:"
    }
]);

const result = justificationWithSpaces(blockOfText.input);

console.log("Your block of text justified is:", result);



