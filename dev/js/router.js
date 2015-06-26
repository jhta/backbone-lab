const $ = require("jquery")(window),
      _ = require("underscore"),
      Backbone = require("backbone"),
      APP = require("./app");
Backbone.$ = $;

const Router = Backbone.Router.extend({
  routes: {
    '':'home'
  },

  home(){
    console.log("Hello!!!");
  }
});

module.exports = Router;
