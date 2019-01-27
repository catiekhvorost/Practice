// $( document ).ready(function() {


// });

let circle = document.getElementById("circle");
let textbox = document.getElementById("textbox");
let textbox = document.getElementById("test");


var text = "";
var i;
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

document.getElementById("textbox").innerHTML = text;
