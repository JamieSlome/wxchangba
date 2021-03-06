var path = require('path')
var env = process.env.NODE_ENV
var dbfile = path.resolve(__dirname, '../db.json')
var mediadir = path.resolve(__dirname, '../media')
var statsfile = path.resolve(__dirname, 'dev-stats.html')

var sitehost = 'changba.wx.fritx.me'
var urlprefix = ''
var siteurl = 'http://' + sitehost + '/' + urlprefix

module.exports = {
  defaultauthor: '匿名用户', // fixme: 匿名单独成字段
  apptitle: '微信唱吧',
  appversion: '1.0.0',
  appyear: '2013-2015',
  appkeyw: '微信唱吧, 歌曲, 录音',
  appdesc: '【微信唱吧】发送语音，歌曲自动上榜。微信唱吧，最自有开放的唱吧。',

  sitehost: sitehost,
  urlprefix: urlprefix,
  siteurl: siteurl,

  admin: [
    {
      user: 'yingye',
      pass: '12306'
    }
  ],
  wxspath: '/xx',
  wxsapptoken: 'xxxxxx',
  wxs: [ // 多个普通slave，与粉丝接触
    {
      rawid: 'gh_xxxxxxxxxxxx',
      user: 'xxxxxxxxx@163.com',
      pass: 'xxxxxx',
      // cookie记住一定要从请求http/headers里取
      cookie: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      token: 'xxxxxxxxxx'
    },
    {
      rawid: 'gh_xxxxxxxxxxxx',
      user: 'xxxxxxxxx@163.com'
      // ...字段同上
    }
  ],
  wxm: { // 单个认证master，使用高级接口
    trustedhosts: ['fritx.me'],
    appid: 'wxXXXXXXXXXXXXXXXX',
    appsecret: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  },

  pickthrottle: 30, // 每x秒最多抓取一次
  staticcache: 60, // min
  viewcache: 30,
  dbfile: dbfile,
  mediadir: mediadir,
  statsfile: statsfile,
  env: env,
  port: 3096
}
