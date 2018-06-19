module.exports = (hbs) => {

  hbs.registerHelper('formatStr', function(str, num, opt) {
    const sub = function(str, n) {
      let r = /[^\x00-\xff]/g;
      if (str.replace(r, "mm").length <= n) {
        return str;
      }
      let m = Math.floor(n / 2);
      for (let i = m; i < str.length; i++) {
        if (str.substr(0, i).replace(r, "mm").length >= n) {
          return str.substr(0, i) + "...";
        }
      }
      return str;
    }
    return (sub(str, num))
  })

hbs.registerHelper('checkTarget', function(isTarget, opt) {
  if (!isTarget) {
    return opt.fn(this);
  } else {
    return opt.inverse(this)
  }
})

hbs.registerHelper('checkEmail', function(email, opt) {
  if (email === 'wait' || email === 'none' || email === null) {
    return opt.inverse(this)
  } else {
    return opt.fn(this);
  }
})

hbs.registerHelper('checkWebsite', function(website, opt) {
  if (website === 'http://' || !website) {
      return opt.fn(this);
  } else {
    return opt.inverse(this)
  }
})

  hbs.registerHelper('if_even', function(num, opt) {
    if (num % 2 === 0) {
      return opt.fn(this)
    } else {
      return opt.inverse(this)
    }
  })

  hbs.registerHelper('css', function(str, option) {
    var cssList = this.cssList || []
    str = str.split(/[,，;；]/)
    str.forEach(function(item) {
      if (cssList.indexOf(item) < 0) {
        cssList.push(item)
      }
    })
    this.cssList = cssList.concat()
  })

  hbs.registerHelper('js', function(str, option) {
    var jsList = this.jsList || []
    str = str.split(/[,，;；]/)
    //str = str.reverse()

    str.forEach(function(item) {
      if (jsList.indexOf(item) < 0) {
        jsList.push(item)
      }
    })
    jsList = jsList.reverse()
    this.jsList = jsList.concat()
  })
}
