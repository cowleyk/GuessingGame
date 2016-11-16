"use strict";
var randomNumber;

function createRandom(){
  randomNumber = Math.round(Math.random() * (100 - 1 +1) +1);
}
console.log(createRandom(), "randomNumberIs:" + randomNumber);

function alert(input){
  window.alert(input);
}
