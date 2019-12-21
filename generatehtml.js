var generateHTML = function(colorData, data) {
    return `<!DOCTYPE html>
<html>
          <head>
              <mate charest="utf-8" />
              <title>Github Profile</title>
          </head>
          <body>
              <h1> <span style="color:`+colorData+`">` + data.data.name + `</span></h1>
              <hr>
              <img src="`+data.data.avatar_url+`" alt="profilepic">
              <br>
              <P>Bio: ` + data.data.bio + `
              <br>
              Company: ` + data.data.company + `
              <br>
              Repo URL: <a href="`+data.data.html_url+`">`+data.data.login+`</a>
              <br>
              Public Repos: `+ data.data.public_repos +` 
              <br>
              Followers: `+ data.data.followers +`
              <br>
              Following: `+ data.data.following +`
              <br>
              Location: `+ data.data.location +`
              </p>
          </body>
      </html>`
      }
      module.exports = {
        generateHTML: generateHTML
    };
    
