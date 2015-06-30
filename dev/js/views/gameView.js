const $ = require("jquery"),
      _ = require("underscore"),
      Backbone = require("backbone");
Backbone.$ = $;
const template = require("../templates/game.hbs");


const GameView = Backbone.View.extend({
  tagName: 'div',
  className: "col s12 m6 l4",
  template: template,

  events: {
    'click .add-current': 'addToCurrentList',
    'click .add-game': 'addToHistory'
  },

  initialize() {

    //this.listenTo(this.model, "change", this.render, this);
  },

  addToCurrentList() {
    this.model.set({finished: false, current: true});

    window.APP.Collections.currentGames.add(this.model);
  },

  addToHistory() {
    this.model.set({finished: false, current: false});
    window.APP.Collections.currentGames.add(this.model);

  },

  render() {
    //this.model.attributes
    let html = template(this.model.toJSON());
    this.$el.html(html);
    return this;
  }
});

module.exports = GameView;
