const express = require('express')
const app = express();
const hbs = require('hbs')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

const routeMap = require('./lib/route-map.lib')
const routes = require('./routes')
const helper = require('./helper')
app.set('view engine', 'hbs')
app.engine('hbs', hbs.__express)
app.set('views', __dirname + '/src')
app.use(express.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/views/partials')
helper(hbs)
app.use(routeMap)
routes(app)

let port = 1988
app.listen(port, (req, res) => {
  console.log('port on', port)
})
