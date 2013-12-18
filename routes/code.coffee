#
# * GET code listing.
# 
exports.list = (req, res) ->
  request = require 'request'
  moment = require 'moment'
  options =
    url: "https://api.github.com/users/garthdb/repos?sort=updated"
    headers:
      'User-Agent': 'request'
  request options, (error, response, body) ->
    if (!error && response.statusCode == 200)
      data = JSON.parse(body)
      for repo in data
      	repo.updated_at_ago = moment(repo.updated_at).fromNow()
      res.render "codeList", 
        repos: data
    else
      console.error 'something broke with the github call'
