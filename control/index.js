const getData = require('../api/')
const dataControl = (req, action) => {
  switch (action) {
    case 'home':
      let query = req.query
      let page = 0
      let key = null
      if (query.page) {
        page = query.page
      }
      if (query.key) {
        key = query.key
      }
      return getData.default(page, key).then(res => {
        req.db = res
        return req
      })
      break
    case 'co':
      let id = req.query.id
      return getData.co(id).then(res => {
        req.db = res
        return req
      })
      break
    case 'rem':
      let rem = req.body
      return getData.rem(rem).then(res => {
        req.result = res
        return req
      })
      break
      case 'target_make':
        let data = req.body
        return getData.targetMake(data).then(res => {
          req.result = res
          return req
        })
        break
    default:
  }
}
module.exports = dataControl
