const query = require('./mysql')
const splitMsData = require('./splitMsData.js')
const getData = {

  default: (page, key) => {
    let size = 15
    let querys = ' id > 0'
    if (key) {
      querys = 'nameCN like "%' + key + '%" or keyword like "%' + key + '%" or introduce like "%' + key + '%" '
    }
    let data = {}
    return query('select id from company_lib where ' + querys + ' order by id desc').then(totalId => {

      return totalId
    }).then(totalId => {
      if (totalId.length === 0) {
        return null
      }
      let totalCount = totalId.length
      let pages = Math.ceil(totalCount / size)
      if (page > pages - 1) {
        page = pages - 1
      }
      let startId = page * size
      let endId = startId + size
      if (endId > totalCount) {
        endId = totalCount
      }
      let ids = []

      for (let id = startId; id < endId; id++) {
        ids.push(totalId[id]['id'])
      }

      let idsStr = ids.join(',')
      let result = {
        totalCount: totalCount,
        pages: pages,
        size: size,
        currentPage: page * 1 + 1,
        key: key,
        idsStr: idsStr
      }
      return (result)
    }).then(result => {
      if (!result) {
        return null
      }
      data.pageInfo = result
      let q = 'select id, nameCN, compType, exhFund, staffs, keyword, email, isTarget, phone, website  from company_lib where id in ( ' + result.idsStr + ') order by id desc'
      return query(q)
    }).then(res => {
      if (res) {
        data.data = res
      } else {
        data.data = null
      }
      return data
    })

  },
  co: (id) => {
    let data = null
    return query('select * from company_lib where id = ' + id).then(res => {
      if (res) {
        if (res[0].sorceData) {
          let sourceData = res[0].sorceData.replace(/[\r\n]/g, "<br>")
          res[0].sorceData = JSON.parse(sourceData)
          data = res[0]
        }
        return data
      } else {
        return null
      }
    }).then(result => {
      if (!result) {
        return null
      }
      return query('select * from company_rem where rid = ' + result.id + ' order by id desc').then(res => {
        data.rem = res
      })
    }).then(result => {
      return data
    })
  },
  rem: (data) => {
    let d = splitMsData(data)
    let key = d.key
    let val = d.val
    return query('insert into company_rem ('+key+') values ('+val+')').then(res => {
      return (res)
    })
  },
  targetMake: (data) => {
    console.log('api', data)
    let d = splitMsData(data)
    return query('update  company_lib set  isTarget = ABS(isTarget - 1)  where id = '+ data.id).then(res => {
      return (res)
    })
  }

}

module.exports = getData
