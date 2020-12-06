# usernamecheck-api
A command line implementation of usernamecheck

[![License](https://img.shields.io/github/license/adrianofinco/usernamecheck-api)](LICENSE.txt)
![Version](https://img.shields.io/github/package-json/version/adrianofinco/usernamecheck-api)
[![Issues](https://img.shields.io/github/issues/adrianofinco/usernamecheck-api)](https://github.com/adrianofinco/usernamecheck-api/issues)

## Introduction
Node command line application for checking availability of a username across multiple websites.

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


