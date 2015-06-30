const $ = require("jquery"),
      _ = require("underscore"),
      Backbone = require("backbone"),
      API = require("../API");
Backbone.$ = $;
const template = require("../templates/gameDescription.hbs");


const GameDescription = Backbone.View.extend({

  template: template,
  el: $("#modal-description"),

  initialize() {
    this.listenTo(this.model, "change", this.render, this);
  },

  render() {
    //this.model.attributes
    let html = template(this.model.toJSON());
    this.$el.html(html);
  }
});

module.exports = GameDescription;
