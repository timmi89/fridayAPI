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
