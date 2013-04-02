'use strict'
path = require('path')
lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet

folderMount = (connect, point) ->
  return connect.static(path.resolve(point))


module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    stylus:
      compile:
        options:
          compress: false
        files:
          'css/main.css': 'css/main.styl'
          'css/reset.css': 'css/reset.styl'
    jade:
      options:
        pretty: true
      compile:
        files:
          'index.html': 'index.jade'
    coffee:
      compile:
        files:
          'js/app.js': 'js/app.coffee'
          'js/router.js': 'js/router.coffee'
          'js/views/code.js': 'js/views/code.coffee'
          'js/views/design.js': 'js/views/design.coffee'
          'js/views/designItem.js': 'js/views/designItem.coffee'
          'js/views/designs.js': 'js/views/designs.coffee'
          'js/views/header.js': 'js/views/header.coffee'
          'js/views/home.js': 'js/views/home.coffee'
          'js/views/speak.js': 'js/views/speak.coffee'
          'js/models/project.js': 'js/models/project.coffee'
          'js/models/repository.js': 'js/models/repository.coffee'
          'js/models/session.js': 'js/models/session.coffee'
          'js/models/user.js': 'js/models/user.coffee'
          'js/collections/project.js': 'js/models/project.coffee'
          'js/collections/repository.js': 'js/models/repository.coffee'
          'js/collections/session.js': 'js/models/session.coffee'
          'js/collections/user.js': 'js/models/user.coffee'
    connect:
      livereload:
        options:
          hostname: '0.0.0.0'
          port: 9001
          middleware: (connect, options) ->
            return [lrSnippet, folderMount(connect, '.')]
    regarde:
      stylus:
        files: ['css/*.styl']
        tasks: ['stylus', 'livereload']
      jade:
        files: ['*.jade']
        tasks: ['jade', 'livereload']
      coffee:
        files: ['js/*.coffee']
        tasks: ['coffee', 'livereload']
      image:
        files: ['img/*']
        tasks: ['livereload']

  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-stylus')
  grunt.loadNpmTasks('grunt-contrib-jade')
  grunt.loadNpmTasks('grunt-regarde')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-livereload')

  # Default task(s).
  grunt.registerTask('compile', ['coffee','stylus','jade'])
  grunt.registerTask('default', ['compile', 'livereload-start', 'connect', 'regarde'])