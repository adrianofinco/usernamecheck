# usernamecheck
A node module for checking availability of usernames across multiple websites

[![License](https://img.shields.io/github/license/adrianofinco/usernamecheck)](LICENSE.txt)
[![Version](https://img.shields.io/npm/v/usernamecheck)](https://www.npmjs.com/package/usernamecheck)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/usernamecheck)](https://www.npmjs.com/package/usernamecheck)
[![Issues](https://img.shields.io/github/issues/adrianofinco/usernamecheck)](https://github.com/adrianofinco/usernamecheck-cli/issues)
![Axios depedency](https://img.shields.io/github/package-json/dependency-version/adrianofinco/usernamecheck/axios)

## Usage
Install package
```sh
npm install usernamecheck
```

Check user in a website
```js
const { listWebsites, isUsernameAvailable } = require('usernamecheck')

console.log(listWebsites()) //=> Array of available websites

isUsernameAvailable('octocat', 'github').then(val => {
    console.log(val) //=> true
})
```

Check user in all websites
```js
for (let website of listWebsites()) {
    isUsernameAvailable('octocat', website).then(val => {
        let message = val === true ? 'available' : 'unavailable'
        console.log(`[${website}] "${username}" ${message}`)
    })
}
```

## Supported websites
- [x] Facebook
- [x] Twitter
- [x] Github
- [x] Instagram
- [x] Pinterest
- [ ] ~~Linkedin~~ (Client-side Rendering)
- [x] Youtube
- [x] Tumbrl
- [ ] ~~Twitch~~ (Client-side Rendering)
- [ ] ~~Imgur~~ (Client-side Rendering)
- [x] Reddit
- [x] Steam
- [x] Patreon
- [x] Deviantart
- [x] Slack
- [x] TikTok
- [x] Medium
- [x] Wordpress
- [x] Soundcloud
- [ ] ~~Spotify~~ (Client-side Rendering)
- [x] Quora
- [x] Ebay
- [x] Telegram 

Since this application parses only the HTTP **response status code** and **response body** it becomes unable to parse client-side rendered pages. Some sites like facebook and twitter ahave both client-side and server-side versions


