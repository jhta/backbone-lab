const $ = require("jquery"),
      _ = require("underscore"),
      Backbone = require("backbone");
Backbone.$ = $;

const GameModel = require("../models/game");

const CurrentGames = Backbone.Collection.extend({
  model: GameModel
});



module.exports = CurrentGames;
