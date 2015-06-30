const $ = require("jquery");
const _ = require("underscore");
const _URL = "https://videogamesrating.p.mashape.com/get.php";
const COUNT = "20";

function _getCurrentGames() {
  let currentGames = localStorage.getItem("current-games");
  return JSON.parse(currentGames);
}

function _setCurrentGame(games, game) {
  games.push(game);
  localStorage.setItem('current-games', JSON.stringify(games));
}

function _reloadCurrentGames(games) {
  console.log(games);
  localStorage.setItem('current-games', JSON.stringify(games));
  //localStorage.setItem('current-games');
}


const API = {

  getDataByName(name, cb) {
    let name = name.replace(/,/g , "+");
    console.log(name);
    $.ajax({
      type: 'GET',
      url: `${_URL}?count=${COUNT}&game=${name}`,
      headers: {
        'X-Mashape-Key': 'KRnroi4jL4mshcNHcNFq6UAhY8Ewp1isECRjsnKHfAVAwANhz5',
        'Accept': 'application/json'
      },
      success(data) {
        cb(null, data);
      },
      error() {
        cb(true, null);
      }
    });
  },

  getCurrentGames() {
    return _getCurrentGames();
  },

  addCurrentGame(game) {
    if(localStorage.getItem("current-games")){
      let currentGames = _getCurrentGames();
      _setCurrentGame(currentGames, game);
    } else {
      let games = [];
      _setCurrentGame(games, game);
    }
  },

  updateCurrentGame(game) {
    console.log("GAME", game);
    let games = _getCurrentGames();
    let newGames = games.map((newGame)=>{
      if(game.title == newGame.title)
        return game;
      else
        return newGame
    });
    _reloadCurrentGames(newGames);
  },

  hasCurrentGame(game) {
    let games = _getCurrentGames();
    var localGames =  _.filter(games, (item)=>{
        return item.title == game.title
    })
    return (localGames.length == 1);
  }
}

module.exports = API;
