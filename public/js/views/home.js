define(['jquery', 'backbone'], function($, Backbone) {
  var View;
  return View = Backbone.View.extend({
    el: $('<section id="hero"/>'),
    strings: ['I don’t handcraft websites;<br/> that would be stupid.<br/> I use a computer.', 'Yes, this is my website;<br/> no, I won\'t build you one.', 'Las Vegas based designer specializing in blah blah blah blah blah.', 'Me? I\'m a social media guru;<br/>I have a twitter account and everything.', 'You\'re not hardcore,<br/>Unless you live hardcore.', 'You have revisions?</br>Yeah, I\'m pretty sure it was perfect the first time', 'I make it Pop.', 'I have 30 years of<br/>mobile web experience.', 'I don\'t write bugs,<br/>just unintentional features'],
    random: function() {
      var selectedIndex;
      selectedIndex = Math.floor((Math.random() * this.strings.length) + 1);
      return this.strings[selectedIndex - 1];
    },
    render: function() {
      this.random();
      return $(this.el).html($('<h2/>').append(this.random()));
    }
  });
});
