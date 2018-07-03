module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index', {
      title: '目标用户管理系统',
      page: 'index',
      data: req.db
    })
  })

  app.get('/co', (req, res) => {
    res.render('co', {
      title: req.db.nameCN,
      page: 'co',
      data: req.db
    })
  })

  app.get('/co_add', (req, res) => {
    res.render('co_add', {
      title: '目标用户增加',
      page: 'co',
      data: null
    })
  })

  app.get('/send_mail', (req, res) => {
    res.render('send_mail', {
      title: '邮件发送',
      page: 'co',
      data: null
    })
  })

  app.post('/rem', (req, res) => {
    res.send(req.result)
  })

  app.post('/target_make', (req, res) => {
    console.log('get post target_make')
    res.send(req.result)
  })

}
