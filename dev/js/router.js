const $ = require("jquery"),
      _ = require("underscore"),
      Backbone = require("backbone");
Backbone.$ = $;



const testGames = require('./objectExample');
const API = require("./API");

//Models
const Game  = require("./models/game");


//Views
const GamesListView   = require("./views/gamesListView");
const CurrentListView = require("./views/currentListView");
const GameDescription = require("./views/gameDescription");

//Collections
const Games        = require("./collections/games");
const CurrentGames = require("./collections/currentGames");

const Router = Backbone.Router.extend({

  routes: {
    '':'home',
    'current':'currentGames'
  },

  initialize() {
    window.APP.Collections.games = new Games(testGames);
    window.APP.Views.gamesList  = new GamesListView({collection: window.APP.Collections.games});

    window.APP.Collections.currentGames = new CurrentGames(API.getCurrentGames());
    window.APP.Views.currentList = new CurrentListView({collection: window.APP.Collections.currentGames});
    window.APP.Models.gameDescription = new Game();
    window.APP.Views.gameDescription = new GameDescription({model: window.APP.Models.gameDescription});
    window.APP.Views.gameDescription.render();
  },

  defaultRoute() {
    console.log("default");
  },

  home() {

  },

  currentGames() {
    //$("#current-list-modal").openModal();
  }
});

module.exports = Router;
