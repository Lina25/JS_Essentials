var ask = confirm("Do you want to play the game?");

if (ask == true) {
  
  var rand_int = Math.round(Math.random() * 5);  
  var guess;  
  var res = false;
  
  for(var i = 1; i <= 3; i++){
    
    guess = parseInt(prompt("Enter the number from 0 to 5"));
     
    if (i == 1 && guess == rand_int) {
      alert('Thanks for the game! Your win is 10$');
      res = true;
    }
    
    else if (i == 2 && guess == rand_int) {
      alert ("You won 5$");
      res = true;
    }
    
    else if (i == 3 && guess == rand_int) {
      alert ("You won 2$");
      res = true;
    }

    else if (i == 3 && guess != rand_int) {
      var ask2 = confirm("You loose the game, do you want to try again ?");
      
      if (ask2 == true) {
        i = 0;
      }
      
      else {
        alert("Thanks for the game! ");
        break;
      }
    
    }
    
    else {
       alert('You won 0$, try again');
    }
       
  }
  
}

else {
  alert('Today you will not win the jackpot, but you could');
}
