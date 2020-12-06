const { listWebsites, isUsernameAvailable } = require('../src/usernamecheck')
const userList = [ 'adriano', 'octocat' ]

// results will they will be printed in the order the http requests return
function checkUserList(userList) {
  for (let username of userList) {
    for (let website of listWebsites()) {
      isUsernameAvailable(username, website).then(val => {
        let message = val === true ? 'available' : 'unavailable'
        console.log(`[${website}] "${username}" ${message}`)
      })
    }
  }
}

checkUserList(userList)
