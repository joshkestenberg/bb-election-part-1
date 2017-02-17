$(document).ready(function() {

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    datatype: 'json'
  }).done(function(data){
    cands = data.candidates;
    $.each(cands, function(){
      $('<li>').html('name: ' + this.name + '; votes: ' + this.votes).appendTo('#candidates');
    });
  });

});
