const querystring = require('querystring');
const request = require('request');

class WechatLogin {

  constructor(appID, secret) {
      this.appid    = appID;
      this.secret   = secret;
      this.base_url = 'https://api.weixin.qq.com/sns/';

      this.access_token_option = {
          base_url: this.base_url + 'oauth2/access_token?',
          request_method: 'get',
          grant_type: 'authorization_code'
      };

      this.userinfo_option = {
          base_url: this.base_url + 'userinfo?',
          request_method: 'get',
          lang: 'zh_CN'
      };

      this.refresh_token_option = {
          base_url: this.base_url + 'oauth2/refresh_token?',
          request_method: 'get',
          grant_typ: 'refresh_token'
      }

      this.auth_option = {
          base_url: this.base_url + 'auth?',
          request_method: 'get',
      }
  }


  getAccessToken(code) {

      const params = {
          appid: this.appid,
          secret: this.secret,
          code: code,
          grant_type: this.access_token_option.grant_type
      };

      const options = {
          method: this.access_token_option.request_method,
          url: this.access_token_option.base_url + querystring.stringify(params)
      };

      return new Promise((resolve, reject) => {

          request(options, (err, res, body) => {
              if (res && body) {
                  resolve(JSON.parse(body))
              } else {
                  reject(err)
              }
          })
      })
  }


  getUserInfo(accessToken, openID) {

      const params = {
          access_token: accessToken,
          openid: openID,
          lang: this.userinfo_option.lang
      };

      const options = {
          method: this.userinfo_option.request_method,
          url: this.userinfo_option.base_url + querystring.stringify(params)
      };

      return new Promise((resolve, reject) => {
          request(options, (err, res, body) => {
              if (res && body) {
                  resolve(JSON.parse(body))
              } else {
                  reject(err)
              }
          })
      })
  }


  refreshToken(refresh_token) {

      const params = {
          appid: this.appid,
          secret: this.secret,
          grant_type: this.refresh_token_option.grant_type,
          refresh_token: refresh_token
      };

      const options = {
          method: this.refresh_token_option.request_method,
          url: this.refresh_token_option.base_url + querystring.stringify(params)
      };

      return new Promise((resolve, reject) => {
          request(options, (err, res, body) => {
              if (res && body) {
                  resolve(JSON.parse(body))
              } else {
                  reject(err)
              }
          })
      })
  }


  auth(access_token, openid) {

      const params = {
          access_token: access_token,
          openid: openid
      };

      const options = {
          method: this.auth_option.request_method,
          url: this.auth_option.base_url + querystring.stringify(params)
      };

      return new Promise((resolve, reject) => {
          request(options, (err, res, body) => {
              if (res && body) {
                  resolve(JSON.parse(body))
              } else {
                  reject(err)
              }
          })
      })
  }
}


module.exports = WechatLogin;
