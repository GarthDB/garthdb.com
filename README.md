##Personal Site for Garth Braithwaite

```
browserify -t coffeeify -t hbsfy --extension=".coffee" -d public/js/app.coffee | uglifyjs -c > public/js/app.build.js
```