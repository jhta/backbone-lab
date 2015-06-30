const $ = require("jquery"),
      _ = require("underscore"),
      Backbone = require("backbone"),
      API = require("../API");

Backbone.$ = $;

const CurrentGameView = require("./currentGameView");

const GamesHistoryView = Backbone.View.extend({

  el: $("#history-games"),

  initialize() {
    this.render();
    this.listenTo(this.model, "change", this.render, this);
    this.listenTo(this.collection, "add", this.addGame, this);
    this.listenTo(this.collection, "reset", this.render, this);
  },

  loadGames() {
    this.collection.forEach(this.loadGame, this);
  },

  loadGame(game) {
      let gameView = new CurrentGameView({model: game});
      this.$el.append(gameView.render().el);
  },

  addGame(game) {
    if(!game.current) {
      if(!API.hasCurrentGame(game.toJSON())) {
        API.addCurrentGame(game.toJSON());
        let gameView = new CurrentGameView({model: game});
        this.$el.append(gameView.render().el);
        Materialize.toast(`${game.get("title")} is added!`, 4000);

      } else {
        //this.render();
        Materialize.toast('you have this game on your history', 4000);

      }

    }
  },

  render() {
    this.$el.empty();
    this.loadGames();
  }
});

module.exports = GamesHistoryView;
