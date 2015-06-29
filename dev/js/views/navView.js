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
    'click .current-list-trigger': 'showCurrentList'
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
    console.log("...");
    if(window.APP.router){
      window.APP.router.navigate("current", {trigger: true});
      console.log("ok!!");
    }
  }
});

module.exports = NavView;
