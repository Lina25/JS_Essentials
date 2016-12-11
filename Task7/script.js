var ask = confirm("Do you want to play the game?");

if (ask == true) {
  
 var rand_int = Math.round(Math.random() * 5);
  var guess;
  var ask2;
  var win = 0;
  
  for(var i = 1; i <= 3; i++){
     
    guess = parseInt(prompt("Enter the number from 0 to 5"));
         
    if (i == 1 && guess == rand_int) {
      win = win + 10;
      ask2 = confirm("Thanks for the game! Your win is 10$. Do you want to try again ?");
        if (ask2 == true) {
          i = 0;
        }
        else {
          alert("Thanks for the game! Your win is - " + win + "$");
          break;
        }
    }
     
    else if (i == 2 && guess == rand_int) {
      win = win + 5;
      ask2 = confirm("Thanks for the game! Your win is 5$. Do you want to try again ?");
        if (ask2 == true) {
          i = 0;
        }
       else {
          alert("Thanks for the game! Your win is - " + win + "$" );
          break;
       }
    }
     
    else if (i == 3 && guess == rand_int) {
      win = win + 2;
      ask2 = confirm("Thanks for the game! Your win is 2$. Do you want to try again ?");
        if (ask2 == true) {
          i = 0;
        }
        else {
          alert("Thanks for the game! Your win is - " + win + "$");
          break;
        }
    }
    
    else if (i == 3 && guess != rand_int) {
      ask2 = confirm("You loose the game, do you want to try again ?");
        if (ask2 == true) {
          i = 0;
        }
        else {
          alert("Thanks for the game! Your win is - " + win + "$");
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