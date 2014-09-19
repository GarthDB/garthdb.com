React = require 'react'

Header = React.createClass
  render: ->
    (React.DOM.div {className:'top'}, [
      (React.DOM.div {className:'logo'}, [
        'Garth Braithwaite'
      ])
      (React.DOM.div {className:'hamburger'}, [
        (React.DOM.a {href:'http://www.fiveguys.com/order-online.aspx', target:'_blank', title:'get a hamburger'}, [])
      ])
    ])
module.exports = Header


  # render: ->
  #   (div {}, [
  #     (h3 {}, ['TODO']),
  #     (TodoList {items: @state.items})
  #     (form {onSubmit: @handleSubmit}, [
  #       (input {onKeyUp: @onKey, value: @state.text}),
  #       (button {}, ['Add #' + (@state.items.length + 1)])
  #     ])
  #   ])

# .top
#   .logo Garth Braithwaite
#   .hamburger
#     a(href="http://www.fiveguys.com/order-online.aspx", target="_blank", title="get a hamburger")
# .main
#   .tada
#     h1 I’m speaking at<br/>some conferences
#     h2 about design and open source.
#     h2 Come to my sessions; </br>I'll bring donuts.
# .bottom
#   include ../public/img/ca_map.svg
#   include ../public/img/va_map.svg
#   include ../public/img/nc_map.svg
