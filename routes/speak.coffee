#
# * GET code listing.
# 
exports.list = (req, res) ->
  sessions = require '../public/js/sessions.json'
  moment = require 'moment'
  sessions = sessions.sessions
  sessions.sort (a,b) ->
    aDate = new Date(a.date)
    bDate = new Date(b.date)
    return bDate - aDate
  for session in sessions
    session.date_ago = moment(session.date).fromNow()
    session.tagger = session.tags.join(", ")
  res.render "sessionList", 
    sessions: sessions
