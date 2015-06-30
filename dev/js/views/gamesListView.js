const $ = require("jquery"),
      _ = require("underscore"),
      Backbone = require("backbone");
Backbone.$ = $;

const GameView = require("./gameView");

const GamesListView = Backbone.View.extend({

  el: $("#games"),

  initialize() {
    this.render();
    this.listenTo(this.model, "change", this.render, this);
    this.listenTo(this.collection, "add", this.addGame, this);
    this.listenTo(this.collection, "reset", this.render, this);
  },

  loadGames() {
    this.collection.forEach(this.addGame, this);
  },

  addGame(game) {
    game.set({current: true, finished: false});
    let gameView = new GameView({model: game});
    this.$el.append(gameView.render().el);
  },

  render() {
    this.$el.empty();
    this.loadGames();
  }
});

module.exports = GamesListView;
