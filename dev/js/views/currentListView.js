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
      let gameView = new CurrentGameView({model: game});
      let renderized = gameView.render().el;
      game.set({finished: false});
      this.$el.append(renderized);

    }
  },

  addGame(game) {
    if(game.current) {
      if(!API.hasCurrentGame(game.toJSON())) {
        API.addCurrentGame(game.toJSON());
        Materialize.toast(`${game.get("title")} is added!`, 4000);

        let gameView = new CurrentGameView({model: game});
        this.$el.append(gameView.render().el);
      } else {
        //this.render();
        Materialize.toast('you have this game on your list', 4000);
      }

    }
  },

  render() {

    this.$el.empty();
    this.loadGames();
  }
});

module.exports = CurrentListView;
