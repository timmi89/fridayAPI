// var apiKey = require('./../.env').apiKey;
// var getRepos = require('../js/back-end.js').getRepos;
var apiKey  = "b5de66d7cf8fe05ae99cc443fa3664fdbb976bd6";


$(document).ready(function(){
    $('#weatherLocation').click(function(){
      var user = $('#location').val();
      $('#location').empty();

      var url = 'https://api.github.com/users/' + user + '?access_token=' + apiKey;

      $.get(url).then(function(response){
        console.log(response);
      }).fail(function(error){
        console.log(error.responseJSON.message);
      });
    });

  });




//   getRepos = function(){
//   $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
//     console.log(response);
//   }).fail(function(error){
//     console.log(error.responseJSON.message);
//   });
// };
