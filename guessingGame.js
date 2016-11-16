'use strict';

var $input = $('#input').val();


$('#button').on('click', function(){

  if($input > randomNumber){
    alert('Too High!');
  }
  if($input < randomNumber){
    alert('Too Low!');
  }
  if($input === randomNumber){
    alert('You Got It!');
  }

});
