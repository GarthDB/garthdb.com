##Personal Site for Garth Braithwaite

Browserify command line command for building and minifying all the js.

```
 browserify -t coffeeify -t simple-jadeify --extension=".coffee" -d public/js/app.coffee | uglifyjs -c > public/js/app.build.js
```

I just setup a git hook on my production server - testing it now.
