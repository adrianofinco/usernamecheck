const axios = require('axios');

 /**
  * Contain a set of definitions for checking username in multiple sites
  */
 const WebsitesMap = {
  github: {
    checkURL: 'https://github.com/$0',
    validationMethod: 'status'
  },
  facebook: {
    checkURL: 'https://www.facebook.com/$0?_fb_noscript=1', // disable script rendering
    validationMethod: 'status'
  },
  twitter: {
    checkURL: 'https://mobile.twitter.com/$0?lang=en', // use legacy twitter to avoid javascript rendering
    validationMethod: 'status'
  },
  pinterest: {
    checkURL: 'https://www.pinterest.com/$0/',
    validationMethod: 'status'
  },
  instagram: {
    checkURL: 'https://www.instagram.com/$0/',
    validationMethod: 'status'
  },
  youtube: {
    checkURL: 'https://www.youtube.com/user/$0',
    validationMethod: 'status'
  },
  tumblr: {
    checkURL: 'https://$0.tumblr.com/',
    validationMethod: 'connect'
  },
  reddit: {
    checkURL: 'https://www.reddit.com/user/$0',
    validationMethod: 'status'
  },
  steam: {
    checkURL: 'https://steamcommunity.com/id/$0/',
    validationMethod: 'body',
    validator (html) {
      return Boolean(html.match(/title.*?Error.*?title/))
    }
  },
  patreon: {
    checkURL: 'https://patreon.com/$0',
    validationMethod: 'status'
  },
  deviantart: {
    checkURL: 'https://www.deviantart.com/$0',
    validationMethod: 'status'
  },
  slack: {
    checkURL: 'https://$0.slack.com/',
    validationMethod: 'status'
  },
  tiktok: {
    checkURL: 'https://www.tiktok.com/@$0?lang=en',
    validationMethod: 'status'
  },
  medium: {
    checkURL: 'https://medium.com/@$0/',
    validationMethod: 'status'
  },
  wordpress: {
    checkURL: 'https://$0.wordpress.com/',
    validationMethod: 'body',
    validator (html) {
      return Boolean(html.match(/\.wordpress\.com<\/em> doesn&#8217;t&nbsp;exist/))
    }
  },
  soundcloud: {
    checkURL: 'https://soundcloud.com/$0',
    validationMethod: 'status'
  },
  quora: {
    checkURL: 'https://www.quora.com/profile/$0',
    validationMethod: 'status'
  },
  ebay: {
    checkURL: 'https://www.ebay.com/usr/$0?lang=en',
    validationMethod: 'body',
    validator (html) {
      return Boolean(html.match(/eBay Profile \- error/))
    }
  },
  telegram: {
    checkURL: 'https://telegram.me/$0',
    validationMethod: 'body',
    validator (html) {
      return ! Boolean(html.match(/<img class="tgme_page_photo_image"/))
    }
  }
}

/** * Returns a array of all available websites names */
function listWebsites () { 
  return Object.keys(WebsitesMap)
}

/** Check if a username is available in the specified website, will return null if the website is unknown */
async function isUsernameAvailable (username, website) {
  let wd = WebsitesMap[website]
  if (typeof wd === 'undefined') return null
  let checkURL = wd.checkURL.replace('$0', username)

  let isAvailable = await requestURL(checkURL).then(response => {
    if (wd.validationMethod === 'connect') {
      return ! (response.connected) // if could not connect, is available
    }
    else if (wd.validationMethod === 'status') {
      return ! (response.status >= 200 && response.status < 300) // if status code < 200 or >= 300, is available
    }
    else {
      return wd.validator(response.body) // if validator functions returns true, is available
    }
  })

  return isAvailable
}

/** Requests a URL and returns a summary of the response */
function requestURL (url) {
  return axios.get(url, { 
    validateStatus: false, 
    headers: { 'User-Agent': 'Mozilla/5.0' } 
  })
  .then(response => {
    return { 
      connected: true,
      status: response.status,
      body: response.data
    }
  })
  .catch(error => {
    return {
      connected: error.code === 'ECONNREFUSED' ? false : true,
      status: error.response.status,
      body: error.response.data
    }
  })
}

module.exports = {
  listWebsites,
  isUsernameAvailable
}
