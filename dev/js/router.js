const $ = require("jquery"),
      _ = require("underscore"),
      Backbone = require("backbone");
Backbone.$ = $;



const testGames = require('./objectExample');


//Models
const Game  = require("./models/game");


//Views
const GamesListView   = require("./views/gamesListView");
const CurrentListView = require("./views/currentListView");

//Collections
const Games        = require("./collections/games");
const CurrentGames = require("./collections/currentGames");


const Router = Backbone.Router.extend({

  routes: {
    '':'home',
    'current':'currentGames'
  },

  initialize() {
    let gamesCollection = new Games(testGames);
    let gamesListView = new GamesListView({collection: gamesCollection});

    let currentGamesCollection = new CurrentGames(testGames);
    let currentListView = new CurrentListView({collection: currentGamesCollection});

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
