var express = require('express')
var path = require('path')
const port = 3000
const log = console.log
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const compiler = webpack(require('./../webpack.config.js'))
const createWebpackMiddleware = () => {
  return webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: compiler.publicPath,
    silent: true,
    stats: 'errors-only',
  });
}


const addWebpackHotMiddleWare = (app, middleware) => {
  app.use(webpackHotMiddleware(compiler));
  const filename = path.join(compiler.outputPath, "index.html");
  app.get('*', (req, res) => {
    middleware.fileSystem.readFile(filename, (err, file) => {
      if (err) {
        log(err);
        res.sendStatus(404);
      } else {
        res.send(file.toString());
      }
    });
  });
}

const addMiddleware = app => {
  const middleware = createWebpackMiddleware()
  app.use(middleware)
  addWebpackHotMiddleWare(app, middleware)
}

const app = express()
app.use(require("webpack-hot-middleware")(compiler))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

addMiddleware(app)
app.listen(port, () => {
  log(`app is listenting on port ${port}`)
})

module.exports = app;