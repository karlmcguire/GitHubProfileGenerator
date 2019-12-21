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

async function dataPrompt () {
    const gitHubUserName = await inquirer.prompt({
    type: "input", 
    message:"What's your GitHub username?", 
    name: "username"})
   
    const gitHubData = await axios.get(`https://api.github.com/users/${gitHubUserName.username}`);

    return gitHubData;
}

