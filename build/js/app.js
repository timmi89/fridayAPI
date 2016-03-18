(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "b5de66d7cf8fe05ae99cc443fa3664fdbb976bd6";

},{}],2:[function(require,module,exports){
exports.User = function(repoName, repoDescript) {
  this.repoName = repoName;
  this.repoDescript = repoDescript;
};

},{}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;
var User = require('../js/back-end.js').User;
// var getRepos = require('../js/back-end.js').getRepos;
// var apiKey  = "b5de66d7cf8fe05ae99cc443fa3664fdbb976bd6";


$(document).ready(function(){
    $('#repoButton').click(function(){
      var user = $('#username').val();

      var repos = [];
      var url = 'https://api.github.com/users/' + user + '/repos?access_token=' + apiKey;

      $.get(url).then(function(response){
        console.log(response);
        $('.showInfo').append("<h2>Here are " + user + "s repositories and their descriptions!</h2>");

        response.forEach(function(repoAPI){
          repos.push(new User(repoAPI.name, repoAPI.description));
        });
       console.log(repos);
        repos.forEach(function(repoDisplay){
          $('.showInfo').append('<p>Name: ' + repoDisplay.repoName + ' ' + "Description: " + repoDisplay.repoDescript + '</p>');
        });
      });
    });
  });


  // for(var i=0; i<response.bikes.length; i++) {
  //   $('.showInfo').append("<li>" + "Name " + response.repos[i].name + ", " + "Description: " + response.bikes[i].frame_model + ", " + response.bikes[i].stolen_location + ", " + "serial number: " + response.bikes[i].serial + "</li>");
  // }

//   getRepos = function(){
//   $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
//     console.log(response);
//   }).fail(function(error){
//     console.log(error.responseJSON.message);
//   });
// };

},{"../js/back-end.js":2,"./../.env":1}]},{},[3]);
