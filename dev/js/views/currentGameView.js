const $ = require("jquery"),
      _ = require("underscore"),
      Backbone = require("backbone"),
      API = require("../API");
Backbone.$ = $;
const template = require("../templates/currentGame.hbs");


const CurrentGameView = Backbone.View.extend({
  tagName: 'li',
  className: "modalList-item",
  template: template,

  events: {
    'click .finished': 'completeGame',
    'click .show-description':  'showDescription'
  },
  initialize() {
    this.listenTo(this.model, "change", this.render, this);
  },

  completeGame(){
    this.model.set({finished: true, current: false});
    this.$el.remove();
    let model = this.model;
    let models = window.APP.Collections.currentGames.models;
    let newModels = models.map((item)=>{
      if(item.get("title") == model.get("title"))
        return model;
      else
        return item;
    })
    API.updateCurrentGame(model.toJSON());
    window.APP.Collections.currentGames.set(newModels);

    let title = this.model.get('title');
    console.log("finished");
    Materialize.toast(`${title} is finished!`, 4000);

  },

  showDescription() {
    window.APP.Models.gameDescription.set(this.model.toJSON());
    window.APP.Views.gameDescription.render();

  },

  render() {
    //this.model.attributes
    let html = template(this.model.toJSON());
    this.$el.html(html);
    return this;
  }
});

module.exports = CurrentGameView;
