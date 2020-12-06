const { listWebsites, isUsernameAvailable } = require('../src/usernamecheck')

let websiteList = listWebsites()
console.log(websiteList)

// isUsernameAvailable is asynchronous you need to use .then to acces the value
isUsernameAvailable('octocat', 'reddit').then(val => { console.log(val) })



