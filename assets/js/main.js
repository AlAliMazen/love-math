//Wait for the DOM to fininsh loading before running the game
//Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function(){
    //all buttons
    let buttons=document.getElementsByTagName('button');
    for(let button of buttons){
        button.addEventListener("click",function(){
            if(this.getAttribute("data-type")==="submit"){
                alert("You clicked submit!")
            }else{
                let gameType=this.getAttribute("data-type");
                alert(`You clicked ${gameType}`)
            }
        })
    }
})
/**
 * the main function to keep game running and it generates two random numbers 
 * to be used later in the code
 */
function runGame(){
    let num1=Math.floor(Math.random()*25)+1;
    let num2=Math.floor(Math.random()*25)+1;
}
function checckAnswer(){

}

function calculateCorrectAnswer(){

}
function incrementScore(){

}

function incrementWrongAnswer(){

}
function displayAdditionQuestion(){

}
function displaySubtractQuestion(){

}
function displayMultiplyQuesiton(){

}
function dispolayDivisionQuestion(){

}