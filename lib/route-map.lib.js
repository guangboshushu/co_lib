const router = require('express').Router()
const dataControl = require('../control')

router.use(function(req, res, next) {
  let action = 'home'
  switch (req.method) {
    case 'POST':
      switch (req.path) {
        case '/rem':
          action = 'rem'
          break
        case '/target_make':
          action = 'target_make'
          console.log('action', action)
          break
      }
      break
    default:
      switch (req.path) {
        case '/co':
          action = 'co'
          break
        default:
          action = 'home'
      }
  }
  dataControl(req, action).then(result => {
    next()
  })

})
module.exports = router
