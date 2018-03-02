var wins = 0;
var losses = 0;

$(document).ready(function reset() {

var jewel = 0;
var yourScore = 0;
var youWin = "";
var youLose = "";
var isJewelChosen = false;
var jewelsReset = false;



var html =
  "<h3>" + youWin + "</h3>" + 
  "<h3>" + youLose + "</h3>" + 
  "<p> Wins: " + wins  + "</p>" +
  "<p>Losses: " + losses + "</p>" ;
$("#wins-losses").html(html);

  

var random = Math.floor(Math.random() * 102) + 18;
$("#random-number").text(random);
  
ad
$("#button-1").val((Math.floor(Math.random() * 12) + 1));
$("#button-2").val((Math.floor(Math.random() * 12) + 1));
$("#button-3").val((Math.floor(Math.random() * 12) + 1));
$("#button-4").val((Math.floor(Math.random() * 12) + 1));

  function initializeCrystals() {
    var jewel = 0;
    var yourScore = 0;
    var isJewelChosen = false;
      
    $("#total-score").empty();
  }


  $(".wrap").on("click", ".jewel", function click() {

    $("#wins-losses").empty();

     if (jewelsReset) {
      return false;
    }

    isJewelChosen = true;
    jewel = $(this).val();
    jewel = parseInt(jewel);
    console.log(jewel);
    $("#total-score").text(jewel = yourScore + jewel)
   
    
    for (i = 0; i < random; i++) {
        yourScore = jewel;
        console.log(yourScore);
    }


    if (yourScore === random) {
        wins++;
        youWin = "You win!!!"
        reset();
        initializeCrystals();
        jewelsReset = true; 
    }


    else if (yourScore > random) { 
        losses++;
        youLose = "You lose"     
        reset();
        initializeCrystals();
        jewelsReset = true;      
    }

    else {
    }
    
    var html =
      "<h3>" + youWin + "</h3>" + 
      "<h3>" + youLose + "</h3>" + 
      "<p> Wins: " + wins  + "</p>" +
      "<p>Losses: " + losses + "</p>" ;
    $("#wins-losses").html(html);


  });

})