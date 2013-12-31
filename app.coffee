express = require("express")
routes = require("./routes")
design = require("./routes/design")
code = require("./routes/code")
speak = require("./routes/speak")
http = require("http")
path = require("path")
app = express()
stylus = require("stylus")
sm = require('sitemap')

sitemap = sm.createSitemap
  hostname: 'http://garthdb.com',
  cacheTime: 60000000,        # 600 sec - cache purge period
  urls: [
  	{ url: '/',  changefreq: 'yearly', priority: 0.3 }
    { url: '/design/',  changefreq: 'yearly', priority: 0.5 }
    { url: '/code/',  changefreq: 'weekly',  priority: 0.7 }
    { url: '/speak/',  changefreq: 'yearly',  priority: 0.5 }
    { url: '/design/Brackets/6499177', changefreq: 'never', priority: 0.3 }
		{ url: '/design/Brackets-Websites/6986915', changefreq: 'never', priority: 0.3 }
		{ url: '/design/Brackets-Shirt/6846239', changefreq: 'never', priority: 0.3 }
		{ url: '/design/httpster/6646687', changefreq: 'never', priority: 0.3 }
		{ url: '/design/Adobe-Flex-SDK-Ultra/6647211', changefreq: 'never', priority: 0.3 }
		{ url: '/design/Beautiful-Rectangles/6647057', changefreq: 'never', priority: 0.3 }
		{ url: '/design/Nerd-Radio/6647175', changefreq: 'never', priority: 0.3 }
		{ url: '/design/Spoon-Project/6647137', changefreq: 'never', priority: 0.3 }
		{ url: '/design/Skullcandy-Mobile/6646815', changefreq: 'never', priority: 0.3 }
		{ url: '/design/Portal-Master/6646907', changefreq: 'never', priority: 0.3 }
  ]

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
app.use stylus.middleware({
	src: path.join(__dirname, "public")
	compile: (str, path) ->
    stylus(str)
      .set('filename', path)
      .set('compress', true)
	})
app.use express.static(path.join(__dirname, "public"))

# development only
app.use express.errorHandler()  if "development" is app.get("env")
app.get "/", routes.index
app.get "/design/:name/:id", design.project
app.get "/design", design.list
app.get "/code", code.list
app.get "/speak", speak.list
app.get '/sitemap.xml', (req, res) ->
  sitemap.toXML (xml) ->
    res.header 'Content-Type', 'application/xml'
    res.send xml
http.createServer(app).listen app.get("port"), ->
  console.log "Express server listening on port " + app.get("port")
