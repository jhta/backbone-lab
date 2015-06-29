const $ = require("jquery"),
      _ = require("underscore"),
      Backbone = require("backbone");
Backbone.$ = $;
const template = require("../templates/game.hbs");


const GameView = Backbone.View.extend({
  tagName: 'div',
  className: "col s12 m6 l4",
  template: template,

  initialize() {
    this.listenTo(this.model, "change", this.render, this);
  },

  render() {
    //this.model.attributes
    let html = template(this.model.toJSON());
    this.$el.html(html);
    return this;
  }
});

module.exports = GameView;
