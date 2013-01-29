define ['zepto', 'backbone'], ($, Backbone) ->
	View = Backbone.View.extend
		el: $('<section id="hero"/>')
		strings: [
			'I don’t handcraft websites;<br/> that would be stupid.<br/> I use a computer.',
			'Yes, this is my website;<br/> no, I won\'t build you one.',
			'Las Vegas based designer specializing in blah blah blah blah blah.',
			'Me? I\'m a social media guru;<br/>I have a twitter account and everything.',
			'I enjoy semicolons.',
			'You\'re not hardcore,<br/>Unless you live hardcore.',
			'You have revisions?</br>Yeah, I don\'t do those.'
		]
		random: ->
			selectedIndex = Math.floor( ( Math.random() * @strings.length ) + 1 )
			return @strings[selectedIndex-1]
		render: ->
			$(@el).html($('<h2/>').append(@random()))