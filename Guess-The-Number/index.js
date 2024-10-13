  // generate a random number:
  let randomNumber = (parseInt(Math.random() * 100) + 1);
  console.log(randomNumber);

  const userInput = document.querySelector('#guessField');
  const submit = document.querySelector('#subt');
  const guessSlot = document.querySelector('.guesses');
  const remaining = document.querySelector('.lastResult');
  const lowOrhi = document.querySelector('.lowOrHi');
  const startOver = document.querySelector('.resultParas');

  // after the remaining part we want to show a messsage :
  const p = document.createElement('p');
  console.log(p);


  let numGuess = 1;
  let playGame = true; // check eligible to play or not

  // check if user is allowed to play the gane :
  if(playGame){
    submit.addEventListener('click', function(e){
      e.preventDefault();
      const guess = parseInt(userInput.value);
      validateGuess(guess);
    })
  }

  // for validatin 
  function validateGuess(guess){
    if(isNaN(guess)){
      alert(`Enter a valid Number!`);
    }
    else if(guess < 1){
      alert(`Enter a number more than 1!`);
    }
    else if(guess > 100){
      alert(`Enter a number less then 100!`);
    }
    else{
      // if his game over or not.....
      if(numGuess > 10){
        refreshGuess(guess);
        displayMessage(`game Over, Random Number was ${randomNumber}`);
        endGame(guess);
      }
      else{
        refreshGuess(guess);
        checkGuess(guess);
      }
    }
  }

  // check the user input
  function checkGuess(guess){
    if(guess == randomNumber){
      displayMessage(`You Guessed it Right!`);
      endGame();
    }
    else if(guess < randomNumber){
      displayMessage(`Number is too low...`);
    }
    else{
      displayMessage(`Number is too high...`);
    }
  }

  // to refresh the guesses
  function refreshGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
  }

  // to display the message : interact with the DOM
  function displayMessage(message){
    lowOrhi.innerHTML = `<h2>${message}</h2>`;
  }

  // end Game
  function endGame(guess){
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<button id="newgame">New Game</button>`;
    startOver.appendChild(p); // append the p to startOver
    playGame = false; // stop the game
    newGame();// start new game
  }


  // start game
  function newGame(guess){
    const newGamebtn = document.querySelector('#newgame');
    newGamebtn.addEventListener('click', function(e){
      // reset all the values
    randomNumber = (parseInt(Math.random() * 100) + 1);
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
    })
}