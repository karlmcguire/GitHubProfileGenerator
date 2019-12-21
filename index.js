const fs = require('fs');

const axios = require('axios');

const inquirer = require('inquirer');

const util = require("util");

const pdf = require('html-pdf');

let generateHTML = require("./generateHTML");

const writeFileAsync = util.promisify(fs.writeFile);

function faveColorPrompt() {
return inquirer.prompt([
 {
    type:"list",
    name: "What is your favorite color?",
    choices: [
    "red",
    "blue",
    "pink",
    "purple",
    "green",
    "orange"

    ]
    },
])

