//Wait for the DOM to fininsh loading before running the game
//Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function(){
    //all buttons
    let buttons=document.getElementsByTagName('button');
    for(let button of buttons){
        button.addEventListener("click",function(){
            if(this.getAttribute("data-type")==="submit"){
                checkAnswer();
                //alert("You clicked submit!")
            }else{
                let gameType=this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    document.getElementById('answer-box').addEventListener("keydown", function(event){
        if(event.key==="Enter"){
            checkAnswer();
        }
    })
    runGame("addition");
})
/**
 * the main function to keep game running and it generates two random numbers 
 * to be used later in the code
 */
function runGame(gameType){
    document.getElementById('answer-box').value="";
    document.getElementById('answer-box').focus();
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
/**
 * check if the answer given by user is same as the return value from claculateCorrectAnswer function.
 */
function checkAnswer(){
    let usrAnswer = parseFloat(document.getElementById('answer-box').value);
    let result=calculateCorrectAnswer();

    if(usrAnswer===result[0]){
        alert("Your answer is correct")
        incrementScore();
        
    }else{
        alert("You missed the correct answer");
        incrementWrongAnswer();
    }
    runGame(result[1]);
}
/**
 * calculates the right answer which will be compared to the users guess.
 */
function calculateCorrectAnswer(){
    let operand1=parseInt(document.getElementById('operand1').innerText);
    let operand2=parseInt(document.getElementById('operand2').innerText);
    let operator=document.getElementById('operator').innerText;
    let result=[];

    if(operator=="+"){
        result = [operand1+operand2,"addition"];
    }else if(operator=="-"){
        result =  [operand1-operand2,"subtraction"];
    }else if(operator=="x"){
        result =  [operand1*operand2,"multiply"];
    }else if(operator=="/"){
        result =  [operand1/operand2,"division"];
    }else{
        alert(`Unknown Game Type ${gameType}`);
        throw (`Aborting ...`);
    }
    return result;
}
function incrementScore(){
    let score=parseInt(document.getElementById('score').innerText);
    score+=1;
    document.getElementById('score').innerText=score;

}

function incrementWrongAnswer(){
    let wrongAnswers=parseInt(document.getElementById('incorrect-score').innerText);
    wrongAnswers+=1;
    document.getElementById('incorrect-score').innerText=wrongAnswers;

}
function displayAdditionQuestion(operand1, operand2){

    document.getElementById('operand1').textContent=operand1;
    document.getElementById('operand2').textContent=operand2;
    document.getElementById('operator').textContent='+';

}
function displaySubtractQuestion(operand1, operand2){
    
    document.getElementById('operand1').textContent=operand1>operand2?operand1:operand2;
    document.getElementById('operand2').textContent=operand1>operand2?operand2:operand1;
    document.getElementById('operator').textContent='-';

    /**
     * in case we would like to get negative number in the result, then run the following lines, otherwise keep it commented
     */
    /*document.getElementById('operand1').textContent=operand1;
    document.getElementById('operand2').textContent=operand2;
    document.getElementById('operator').textContent='-';*/
}
function displayMultiplyQuesiton(operand1, operand2){
    document.getElementById('operand1').textContent=operand1;
    document.getElementById('operand2').textContent=operand2;
    document.getElementById('operator').textContent='x';
}
function dispolayDivisionQuestion(operand1, operand2){
    /**
     * following 3 lines can result in floating result and the answer won't match. to avoid this
     * either multiply the two operand together and assign the first operand to the result OR
     * check if the firstcrandom number is divisible by the second one.
     */
    /*
    document.getElementById('operand1').textContent=operand1>operand2?operand1:operand2;
    document.getElementById('operand2').textContent=operand1>operand2?operand2:operand1;
    document.getElementById('operator').textContent='/';*/

    /**
     * in case we would like to get negative number in the result, then run the following lines, otherwise keep it commented
     */
    /*document.getElementById('operand1').textContent=operand1;
    document.getElementById('operand2').textContent=operand2;
    document.getElementById('operator').textContent='/';*/

    //better alternative
    if(operand1%operand2===0){
	    document.getElementById("operand1").textContent = operand1; 
	}else{
	     document.getElementById("operand1").textContent = operand1*operand2;
	}
		document.getElementById("operand2").textContent = operand2;
	document.getElementById("operator").textContent = "/";

}