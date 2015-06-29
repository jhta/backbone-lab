const $ = require("jquery"),
      _ = require("underscore"),
      Backbone = require("backbone");

Backbone.$ = $;


const Router  = require("./router");
const NavView = require("./views/navView");
const SearchView = require("./views/searchFormVIew");

const navView = new NavView();
const searchView = new  SearchView();



window.APP = {}
const router = new Router();

window.APP.router = router || null;

Backbone.history.start();
