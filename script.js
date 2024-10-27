const userInput = document.querySelector('.user-input')
const form = document.querySelector('form')
const result = document.querySelector('.result')
const allGuesses = document.querySelector('.all-guesses')
const submitbtn = document.querySelector('.submit-btn')
const startGamebtn = document.querySelector('.start-game')

function  number() {
const allGuessesArray = []

let randomNumber = Math.round(Math.random() * 100)


form.addEventListener('submit' , (e) => {
 e.preventDefault()
 const userInputValue = parseInt(userInput.value)
 if(userInputValue < randomNumber){
   result.innerHTML = "Too low!!";
 }
 else if(userInputValue > randomNumber){
    result.innerHTML="Too Highhh!!!";
 }
 else{
    result.innerHTML="Yupp you guessed it right! Congratss";
    startGamebtn.disabled = false;
    submitbtn.disabled = true;
 }

 allGuessesArray.push(userInputValue);
 allGuesses.innerHTML = 'Your guesses: '+ allGuessesArray.join(',');
 form.reset()
})


startGamebtn.addEventListener('click', () => {
  allGuesses.innerHTML= '';
  result.innerHTML = '';
  startGamebtn.disabled = true;
  submitbtn.disabled = false;
  randomNumber = Math.round(Math.random() * 100);
})
}

number()

