const $ = require("jquery"),
      _ = require("underscore"),
      Backbone = require("backbone");
Backbone.$ = $;
const template = require("../templates/song.hbs");


const GameView = Backbone.View.extend({
  tagName: 'li',
  className: "list",
  el: $('body'),
  template: template,
  initialize() {
      console.log("the View!!");
  },

  render() {
    //this.model.attributes
    let text = {text: "mm i don't now xD"};
    let html = template(text);
    this.$el.html(html);
  }
});

module.exports = GameView;
