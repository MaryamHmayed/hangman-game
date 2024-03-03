const words=["apple","cherry","grape","lemon"];
const randomNum = Math.floor(Math.random()*words.length);
const randomWord = words[randomNum];
const letters = document.querySelectorAll(".letter");

let wrongGuesses=0;
let clickedLetter;

hidden=randomWord.replace(/[a-z]/gi , '-')
wordList=randomWord.split()

function displayWord(){
    document.getElementById("answer-section").innerHTML = hidden
    
    

}


function clickLetters(){
    for(let i=0;i<letters.length;i++){
      let  clickedLetter=letters[i].textContent;
        letters[i].addEventListener("click", function(){
        letters[i].classList.add("pressed");
        setTimeout(() => {
            letters[i].classList.remove('pressed');
          }, 200);
          console.log(letters[i])
          if (wordList.includes(clickedLetter)){
            const  newHidden=hidden.substring(0, i) + clickedLetter + hidden.substring(i+ 1);
            hidden=newHidden
            document.getElementById("answer-section").innerHTML=hidden
        }
        else{
            wrongGuesses+=1
            drawHangman()

    }
        
        })
        
    }}


    function drawHangman(){
       if (wrongGuesses==1){head()}
       if (wrongGuesses==1){body()}
       if (wrongGuesses==1){leftHand()}
       if (wrongGuesses==1){rightHand()}
       if (wrongGuesses==1){leftLeg()}
       if (wrongGuesses==1){rightLeg()}
    }


        

    
    
        
    


displayWord()
clickLetters()

