const words=["apple","cherry","grape","lemon"];
const randomNum = Math.floor(Math.random()*words.length);
const randomWord = words[randomNum];
const letters = document.querySelectorAll(".letter");
const one=head();
const two=body();
const three= leftHand();
const four=rightHand();
const five =leftLeg();
const six= rightLeg();
let clickedLetter;
let hangmanArray = [one,two,three,four,five,six]; 
hidden=randomWord.replace(/[a-z]/gi , '-')

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
          if (randomWord[i]==clickedLetter){
            const  newHidden=hidden.substring(0, j) + clickedLetter + hidden.substring(j+ 1);
            hidden=newHidden
            document.getElementById("answer-section").innerHTML=hidden
        }
        else{
            hangmanArray[Math.floor(Math.random() * hangmanArray.length)]();
    }
        
        })
        
    }}


    
        
        

    
    
        
    


displayWord()
clickLetters()



