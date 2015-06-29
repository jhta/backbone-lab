const $ = require("jquery");
const _URL = "https://videogamesrating.p.mashape.com/get.php";
const COUNT = "20";

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
      success: function(data) {
        console.log("DATA");
        console.log(data);
        cb(null, data);
      },
      error: function() {
        console.log("error");
        cb(true, null);
      }

    });

  }
}

module.exports = API;
