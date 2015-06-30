const $ = require("jquery"),
      _ = require("underscore"),
      Backbone = require("backbone"),
      API = require("../API");
Backbone.$ = $;
const template = require("../templates/search.hbs");


const GamesListView   = require("./gamesListView");
const Games           = require("../collections/games");

const SearchFormView = Backbone.View.extend({

  el: $("#search-input"),
  tagName: 'div',
  className: "card-panel",
  template: template,

  events: {
    'keyup #search-game': 'searchGame'
  },

  initialize() {
    this.render();
  },

  render() {
    //this.model.attributes
    let html = template();
    this.$el.html(html);
  },

  searchGame(e) {
    if(e.keyCode === 13) {
      let gameInputDOM = $("#search-game");
      $("#preloader").addClass("active");
      $("#games").empty();
      API.getDataByName(gameInputDOM.val(), (err, data)=>{
        if(err) {
          console.log("error");
        } else {
          $("#preloader").removeClass("active");

          let gamesCollection = new Games(data);
          let gamesListView = new GamesListView({collection: gamesCollection});
        }
      })
      gameInputDOM.val("");

      // let gamesCollection = new Games(ObjectExample2);
      // let gamesListView = new GamesListView({collection: gamesCollection});
    }

  }

});

module.exports = SearchFormView;
