// Generated by CoffeeScript 1.4.0
(function(){define(["zepto","backbone"],function(e,t){var n;return n=t.View.extend({el:e("header.main"),events:{"click nav a":"navigate","click a.logo":"logoClickHandler"},initialize:function(){return this.render()},navigate:function(t){var n;n=e(t.target).html().toLowerCase();router.navigate(n,!0);return!1},logoClickHandler:function(e){router.navigate("/",!0);return!1}})})}).call(this);