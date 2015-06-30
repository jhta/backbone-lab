const $ = require("jquery"),
      _ = require("underscore"),
      Backbone = require("backbone"),
      API = require("../API");

Backbone.$ = $;

const CurrentGameView = require("./currentGameView");

const CurrentListView = Backbone.View.extend({

  el: $("#current-games"),

  initialize() {
    this.render();
    this.listenTo(this.collection, "add", this.addGame, this);
    this.listenTo(this.collection, "reset", this.render, this);
    this.listenTo(this.collection, "change", this.render, this);

  },

  loadGames() {
    this.collection.forEach(this.loadGame, this);
  },

  loadGame(game) {
    if(!game.get('finished') && game.get('current')){
      game.set({finished: false});
      let gameView = new CurrentGameView({model: game});
      this.$el.append(gameView.render().el);

    }
  },

  addGame(game) {
    if(!API.hasCurrentGame(game.toJSON())) {
      game.set({finished: false, current: true});
      API.addCurrentGame(game.toJSON());
      Materialize.toast(`${game.get("title")} is added!`, 4000);

      let gameView = new CurrentGameView({model: game});
      this.$el.append(gameView.render().el);
    }
  },

  setGame(game) {
    console.log("hello!!");
    //this.$el.remove();
  },



  render() {
    this.$el.empty();
    this.loadGames();
  }
});

module.exports = CurrentListView;
