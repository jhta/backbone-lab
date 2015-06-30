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
const GamesHistoryView = require("./views/gamesHistoryView");

//Collections
const Games        = require("./collections/games");
const CurrentGames = require("./collections/currentGames");

const Router = Backbone.Router.extend({

  routes: {
    '':'home',
    'current':'renderCurrentGames',
    'history': 'renderHistoryGames'
  },

  initialize() {
    window.APP.Collections.games = new Games(testGames);
    window.APP.Views.gamesList  = new GamesListView({collection: window.APP.Collections.games});

    window.APP.Collections.currentGames = new CurrentGames(API.getCurrentGames());
    window.APP.Views.gamesHistory = new GamesHistoryView({collection: window.APP.Collections.currentGames});
    window.APP.Views.currentList = new CurrentListView({collection: window.APP.Collections.currentGames});

    window.APP.Models.gameDescription = new Game();
    window.APP.Views.gameDescription = new GameDescription({model: window.APP.Models.gameDescription});
  },

  home() {
    //
  },

  renderCurrentGames() {
    window.APP.Views.currentList.render();
    //$("#current-list-modal").openModal();
  },

  renderHistoryGames() {
    window.APP.Views.gamesHistory.render();
  }


});

module.exports = Router;
