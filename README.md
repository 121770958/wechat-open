# wechat-open
微信开放平台SDK 微信登录 补充微信登录其他接口

### Usage
```bash
npm i wechat-open -S
```

```javascript
const {WechatLogin} = require('index')

const wechat_login = new WechatLogin(AccessKeyId, AccessKeySecret)

wechat_login.getAccessToken(code)
=>
promise

wechat_login.getUserInfo(accessToken, openId)
=>
promise

wechat_login.auth(access_token, openid)
=>
promise

wechat_login.refreshToken(refresh_token)
=>
promise
```

### new WechatLogin(AccessKeyId,AccessKeySecret)

  - `AccessKeyId` \<string\> 必填，阿里云颁发给用户的访问服务所用的密钥ID。
  - `AccessKeySecret` \<string\> 必填，AccessKeySecret

构造方法，传入配置对象。

```javascript
const {WechatLogin}= require('wechat-open')

const wechat_login = new WechatLogin(AccessKeyId,AccessKeySecret)

```



