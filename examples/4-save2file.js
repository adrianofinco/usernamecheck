const fs = require('fs')
const { listWebsites, isUsernameAvailable } = require('../src/usernamecheck')
const userList = [ 'adriano', 'octocat' ]

let filename = 'result.csv'
fs.writeFileSync(filename, 'username;website;available\n')

async function checkUserList(userList) {
  for (let username of userList) {
    for (let website of listWebsites()) {
      await isUsernameAvailable(username, website).then(val => {
        fs.appendFileSync(filename, `${username};${website};${val === true ? 'yes' : 'no' }\n`)
      })      
    }
  }
}

checkUserList(userList)
