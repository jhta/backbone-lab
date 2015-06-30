const $ = require("jquery"),
      _ = require("underscore"),
      Backbone = require("backbone");
Backbone.$ = $;
const template = require("../templates/nav.hbs");

const NavView = Backbone.View.extend({

  el: $("#nav"),
  tagName: 'div',
  className: "nav-wrapper",
  template: template,

  events: {
    'click .current-list-trigger': 'showCurrentList',
    'click .history-list-trigger': 'showHistoryList'
  },

  initialize() {
    this.render();
  },

  render() {
    //this.model.attributes
    let html = template();
    this.$el.html(html);
  },

  showCurrentList() {
    if(window.APP.router){
      window.APP.router.navigate("current", {trigger: true});
    }
  },

  showHistoryList() {
    if(window.APP.router){
      window.APP.router.navigate("history", {trigger: true});
    }
  }


});

module.exports = NavView;
