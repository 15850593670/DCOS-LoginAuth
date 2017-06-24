import cookie from "cookie";

import { userCookieKey } from "../constants/AuthConstants";

const Utils = {
  cccccookie: null,
  getUserMetadata() {
    // console.log('get user cookie')
    if(this.cccccookie == null){
    return cookie.parse(global.document.cookie)[userCookieKey];
    } else {
      return JSON.parse(cookie.parse(this.cccccookie)[userCookieKey])
    }
  },
  emptyCookieWithExpiry(date) {
    // console.log('empty user cookie')
    return cookie.serialize(userCookieKey, "", { expires: date });
  },
  setUserCookie(uid, date) {
    // console.log('set user cookie', uid)
    this.cccccookie = cookie.serialize(userCookieKey, JSON.stringify({ is_remote : true, description: 'new user', uid : uid}), {expires: date });
    console.log(this.cccccookie)
    return this.cccccookie
  }
};

module.exports = Utils;
