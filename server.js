const ExpressWebServer = require('./framework/express-server')

const expressWebServer = new ExpressWebServer({
  WebServerInterface: {
    displayApiVersion: () => 'v1.1.1'
  },
})

expressWebServer.start()