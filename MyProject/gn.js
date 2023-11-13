const conrainerEl = document.querySelector('.container');
const btnPlayEl = document.querySelector('.btn-again');
const btnChckEl = document.querySelector('.btn_check');
const hideNumEl = document.querySelector('.hide_num'); 4
const msgEl = document.querySelector('.message');
const inputNumEL = document.querySelector('.input_num');
const highScoreEL = document.querySelector('.high_score');
const scoreEL = document.querySelector('.score');

//generate random between 1 to 10
let randomNum = Math.trunc(Math.random() * 10 + 1);

let score = 10;
let highScore = 0;

console.log("11111");
//event to check the hide num
btnChckEl.addEventListener('click', () => {
    console.log(inputNumEL.value);
    console.log(randomNum);
    const guess = Number(inputNumEL.value);
    //check empty input
    if (guess) {
        //not match hide num4
        if (guess != randomNum) {
            //show user score
            if (score > 1) {
                score--;
                scoreEL.textContent = score;
                msgEl.textContent = guess > randomNum ? "Too More than it" : "Too lower than it";
                scoreEL.textContent = score;
            } else {
                msgEl.textContent = "You've losed the game";
                scoreEL.textContent = 0;
            }
        }
        //success
        else {
           hideNumEl.textContent=randomNum;
           msgEl.textContent="You won the game";
        }
    } else {  
        msgEl.textContent="Pease enter a Num";
    }
})


//display message
const displayMsg=function(message){
    msgEl.textContent=message;
    hideNumEl.textContent=(`RandomNum=${randomNum}`);
}

//play again
btnPlayEl.addEventListener('click',()=>{
    inputNumEL.value="";
    score=10;
    randomNum=math.floor(math.random()*10+1);
    scoreEL.textContent=score;
    //conrainerEl.style.backgroundColor=red;
})


document.addEventListener('DOMContentLoaded', function () {
    const themeSelector = document.getElementById('theme');
  
    themeSelector.addEventListener('change', function () {
      const selectedTheme = themeSelector.value;
      document.body.classList.remove('dark', 'light');
      document.body.classList.add(selectedTheme);
    });
  });
  