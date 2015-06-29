const $ = require("jquery"),
      _ = require("underscore"),
      Backbone = require("backbone");
Backbone.$ = $;
const template = require("../templates/currentGame.hbs");


const CurrentGameView = Backbone.View.extend({
  tagName: 'li',
  className: "modalList-item",
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

module.exports = CurrentGameView;
