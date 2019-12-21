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
const data = 
console.log(res.data.avatar_url);
console.log(res.data.name);
console.log(res.data.location);
console.log(res.data.html_url);
console.log(res.data.bio);
console.log(res.data.public_repos);
console.log(res.data.followers);
console.log(res.data.following);


}

async function dataPrompt () {
    const gitHubUserName = await inquirer.prompt({
    type: "input", 
    message:"What's your GitHub username?", 
    name: "username"})
   
    const gitHubData = await axios.get(`https://api.github.com/users/${gitHubUserName.username}`);

    return gitHubData;
    }

async function init(){

const colorData = await faveColorPrompt();

const data = await dataPrompt();

const html = await generateHTML.generateHTML(Data, data);

await writeFileAsync("index.html", html);

var doc = fs.readFileSync('index.html', 'utf8');

var options = { format: 'Letter', orientation: "portrait" };

pdf.create(doc, options).toFile(data.data.name + '.pdf', function(err, res) {

if (err) return console.log(err);
   
});

}

init();

