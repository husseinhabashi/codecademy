//user's choices 
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || 
    userInput === 'scissors'){ 
      return userInput;
    } else {
      console.log('User Error');
    }
  
  
  
  //computer function for random selection
  function getComputerChoice(){ 
    switch (Math.floor(Math.random() * 3)) {
      case 0: 
        return 'rock';
      case 1: 
        return 'paper';
      case 2:
        return 'scissors';
    }
  }
  
  // determining the winner
  const  determineWinner = (userChoice, computerChoice) => {
  
  //tie
    if (userChoice === computerChoice) {
      return 'It is a TIE!';
    } 
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer Wins';
      } else {
       return 'YOU WON!'
      }
    }   
  // if user picks paper and...
     if (userChoice === 'paper') {
  //computer picks scissor,
      if (computerChoice === 'scissors') {
       return 'Computer Wins';
      } else { // if computer pick rock,
       return 'YOU WON!';
      }
    }   
    
  //if user picks scissors and..
     if (userChoice === 'scissors') {
  //computer pick rock, 
      if (computerChoice === 'rock') {
       return 'Computer Wins';
      } else { //if computer picks paper,
       return 'YOU WON!';
        } 
    }
  // actually playing the game
  const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
  // print of results
  console.log('You played: ' + userChoice);
  console.log('The computer Played ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
  };
  //playing the game
  playGame();