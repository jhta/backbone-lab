const $ = require("jquery"),
      _ = require("underscore"),
      Backbone = require("backbone");
Backbone.$ = $;

const CurrentGameView = require("./currentGameView");

const CurrentListView = Backbone.View.extend({

  el: $("#current-games"),

  initialize() {
    this.render();
    //this.listenTo(this.model, "change", this.render, this);
    this.listenTo(this.collection, "add", this.addGame, this);
    this.listenTo(this.collection, "reset", this.render, this);
  },

  loadGames() {
    this.collection.forEach(this.addGame, this);
  },

  addGame(game) {
    let gameView = new CurrentGameView({model: game});
    this.$el.append(gameView.render().el);
  },

  render() {
    this.$el.empty();
    this.loadGames();
  }
});

module.exports = CurrentListView;
