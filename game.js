
var buttonColors = ["Green","Red","Yellow","Blue"];
var gamepattern = [];


$(document).keypress(function(event)
{

   $("h1").text("Level 1");

   var randomNumber = Math.floor(Math.random()*4);

   if(randomNumber===0)
   {
      var green = new Audio("sounds/green.mp3");
      green.play();
   }
   else if(randomNumber===1)
   {
      var red = new Audio("sounds/red.mp3");
      red.play();
   }
   else if(randomNumber===2)
   {
      var yellow = new Audio("sounds/yellow.mp3");
      yellow.play();
   }
   else if(randomNumber===3)
   {
      var blue = new Audio("sounds/blue.mp3");
      blue.play();
   }
   else
   {
      var wrong= new Audio("sounds/wrong.mp3");
      wrong.play();
   }

   randomChosenColor = buttonColors[randomNumber];
   $("#" + randomChosenColor).addClass("pressed");
   setTimeout(function()
   {
       $("#" + randomChosenColor).removeClass("pressed");

   },100);
});
