#
# * GET design listing.
# 
exports.list = (req, res) ->
  request = require 'request'
  options =
    url: 'https://www.behance.net/v2/users/garthdb/projects?api_key=k14bSsAQqEr1edu3lyiS1yL6t9qWRulA'
    headers:
      'User-Agent': 'request'
  request options, (error, response, body) ->
    if (!error && response.statusCode == 200)
      projects = JSON.parse(body).projects
      for project in projects
        splitURL = project.url.split('/')
        project.slug = splitURL[splitURL.length - 2]
        project.imgURL = project.covers['404']
      res.render "designList", 
        projects: projects
    else
      console.error 'something broke with the behance call'

exports.project = (req, res) ->
  request = require 'request'
  options =
    url: "https://www.behance.net/v2/projects/#{req.params.id}?api_key=k14bSsAQqEr1edu3lyiS1yL6t9qWRulA"
    headers:
      'User-Agent': 'request'
  request options, (error, response, body) ->
    if (!error && response.statusCode == 200)
      project = JSON.parse(body).project
      for module in project.modules
        if module.type = "image"
          project.imgs.push(module)
      res.render "designProject", 
        project: project
  # res.send req.params.name
