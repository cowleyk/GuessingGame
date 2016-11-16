'use strict';



$('#button').on('click', function(){
  var $input = $('#input').val();

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
