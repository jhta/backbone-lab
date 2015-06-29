const $ = require("jquery"),
      _ = require("underscore"),
      Backbone = require("backbone");
Backbone.$ = $;

const GameModel = require("../models/game");

const Games = Backbone.Collection.extend({
  model: GameModel
});



module.exports = Games;
