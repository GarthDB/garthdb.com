express = require("express")
routes = require("./routes")
design = require("./routes/design")
code = require("./routes/code")
speak = require("./routes/speak")
http = require("http")
path = require("path")
app = express()

# all environments
app.set "port", process.env.PORT or 3000
app.set "views", path.join(__dirname, "views")
app.set "view engine", "jade"
app.use express.compress()
app.use express.favicon()
app.use express.logger("dev")
app.use express.json()
app.use express.urlencoded()
app.use express.methodOverride()
app.use app.router
app.use require("stylus").middleware(path.join(__dirname, "public"))
app.use express.static(path.join(__dirname, "public"))

# development only
app.use express.errorHandler()  if "development" is app.get("env")
app.get "/", routes.index
app.get "/design/:name/:id", design.project
app.get "/design", design.list
app.get "/code", code.list
app.get "/speak", speak.list
http.createServer(app).listen app.get("port"), ->
  console.log "Express server listening on port " + app.get("port")
