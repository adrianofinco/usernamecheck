const { listWebsites, isUsernameAvailable } = require('../src/usernamecheck')

let websiteList = listWebsites()
console.log(websiteList)

// isUsernameAvailable is asynchronously you need to use .then to acces the value
isUsernameAvailable('octocat', 'github').then(val => { console.log(val) })



