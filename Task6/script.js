var rand_int = Math.round(Math.random() * 100);
var guess;

while (guess !== rand_int) {
  
  guess = parseInt(prompt("Enter the number from 0 to 100"));
  
  if (guess < 0 || guess > 100) {
    alert("number should be from 0 to 100, try again");
  }
  
  else if (guess > rand_int) {
    alert("Our number is lower, try again")
  }
  
  else if (guess < rand_int) {
    alert("Our number is higher, try again")
  }
  
  else if (guess == rand_int) {
    alert("You are right, the number is" + rand_int);
  }
  
  else {
    break;
  }

}