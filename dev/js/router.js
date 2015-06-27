const $ = require("jquery"),
      _ = require("underscore"),
      Backbone = require("backbone");
Backbone.$ = $;


const Game  = require("./models/game");
const GameView = require("./views/gameView");

const Router = Backbone.Router.extend({
  routes: {
    '':'home'
  },

  defaultRoute() {
    console.log("default");
  },

  home() {
    var game = new Game({title: 'God of War'});
    var gameView = new GameView();
    gameView.render();
  }
});

module.exports = Router;
