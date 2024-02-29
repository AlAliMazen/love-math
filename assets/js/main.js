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
                runGame(gameType);
            }
        })
    }
    runGame("addition");
})
/**
 * the main function to keep game running and it generates two random numbers 
 * to be used later in the code
 */
function runGame(gameType){
    let num1=Math.floor(Math.random()*25)+1;
    let num2=Math.floor(Math.random()*25)+1;

    if(gameType=="addition"){
        displayAdditionQuestion(num1,num2);
    }else if(gameType=="subtraction"){
        displaySubtractQuestion(num1,num2);
    }else if(gameType=="multiply"){
        displayMultiplyQuesiton(num1,num2);
    }else if(gameType=="division"){
        dispolayDivisionQuestion(num1,num2);
    }else{
        alert(`Unknown Game Type ${gameType}`);
        throw (`Aborting ...`);
    }
}
function checckAnswer(){

}

function calculateCorrectAnswer(){

}
function incrementScore(){

}

function incrementWrongAnswer(){

}
function displayAdditionQuestion(operand1, operand2){

    document.getElementById('operand1').textContent=operand1;
    document.getElementById('operand2').textContent=operand2;
    document.getElementById('operator').textContent='+';

}
function displaySubtractQuestion(operand1, operand2){
    document.getElementById('operand1').textContent=operand1;
    document.getElementById('operand2').textContent=operand2;
    document.getElementById('operator').textContent='-';
}
function displayMultiplyQuesiton(operand1, operand2){
    document.getElementById('operand1').textContent=operand1;
    document.getElementById('operand2').textContent=operand2;
    document.getElementById('operator').textContent='x';
}
function dispolayDivisionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent=operand1;
    document.getElementById('operand2').textContent=operand2;
    document.getElementById('operator').textContent='/';
}