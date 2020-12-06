const { listWebsites, isUsernameAvailable } = require('../src/usernamecheck')
const userList = [ 'adriano', 'octocat' ]

// entire function is async, result will be printed in order they go
// this method is slower since it awaits for the current request to return before sending the next
async function checkUserList(userList) {
  for (let username of userList) {
    for (let website of listWebsites()) {
      await isUsernameAvailable(username, website).then(val => {
        let message = val === true ? 'available' : 'unavailable'
        console.log(`[${website}] "${username}" ${message}`)
      })
    }
  }
}

checkUserList(userList)
