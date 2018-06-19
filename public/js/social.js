let baseurl = 'https://api.weibo.com/oauth2/authorize?'
let weibo = {
  appKey: '2769469504',
  redirectUrl: 'http://yidu.githup.xyz/social',
  appSecret: 'f91dd95df9a2840d660455d1c756cb4a'
}

$('#loginBtn').click(function() {
  let authUrl = baseurl + 'client_id=' + weibo.appKey + '&redirect_uri=' + weibo.redirectUrl
  window.open(authUrl)
})
