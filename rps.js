/*
Rock, Paper, Scissors minigame
Author: NaderHauache.
Date: 09.22.2026
*/

function toInt(dfloatNum){
    //Uses bitwise operation to cast it into integer
    return ~~dfloatNum;
}

function pickRandomNumber(){
    //Math.random() returns a float in the (0,1) interval.
    let randomNum = Math.random();

    //Divides randomNum by three and judges the third.
    if (randomNum > 0.71)
        randomNum = 2;
    else if (randomNum > 0.3)
        randomNum = 1;
    else
        randomNum = 0;

    //Using bitwise operator to convert 64bit float into integer.
    // Not(Not(a)) = a.
    return toInt(randomNum);
}

function getComputerChoice(){
    return pickRandomNumber();
}

//Not considering a wrong input from user.
function getHumanChoice(){
    let loopExit = false;
    while (loopExit == false){
        let userChoice = prompt("Your turn! Choose one option: \
                            \n Rock = 0 \
                            Paper = 1 \
                            Scissor = 2");
        if (userChoice < 3 && userChoice >= 0)
            return +userChoice;
    }
}

function playRound(){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    //If Rock-Rock/Paper-Paper/Scissor-Scissor
    if(humanChoice == computerChoice)
        return 0;
    //Given the fact that is not possible both lose, only draws, only win logic must be judged.
    //0 = Rock, 1 = Paper, 2 = Scissor
    //1 = Human, 2 = Computer
    if(
        (humanChoice == 0 && computerChoice == 2) ||
        (humanChoice == 1 && computerChoice == 0) ||
        (humanChoice == 2 && computerChoice == 1)
      )
        //Return 1 - Human
        return 1;
    //Return 2 - Computer
    return 2;
    }

function showScoreboard(humanScore, computerScore){
    console.log(`ScoreBoard: Human: ${humanScore} x Computer: ${computerScore}`);
}

function showRemainingTurns(count){
    console.log(`${(5-1) - count} turn remains !`);
}


function playGame(){
    let humanScore = 0, computerScore = 0;
    console.log("Hello User. How are you Doing ? Let's play a game? =D");
    console.log("This is the Rock-Paper-Scissor game.")
    console.log("You will play against the machine 5 turns... Right?")
    console.log("Get Ready ?")
    for(let count = 0; count < 5; count += 1){
        let turnWinner = playRound();
        
        if (turnWinner == 0){
            console.log("Turn Tied. No Winner!");
            showScoreboard(humanScore, computerScore);
            showRemainingTurns(count)
        }

        if (turnWinner == 1){
            humanScore += 1;
            console.log("You Won! Congratulations.");
            showScoreboard(humanScore, computerScore);
            showRemainingTurns(count)
        }

        if (turnWinner == 2){
            computerScore += 1;
            console.log("You Lost! Try Again.");
            showScoreboard(humanScore, computerScore);
            showRemainingTurns(count)
        }
    }
    console.log("Game Finished. Thanks for playing =D");
    console.log(`Final ScoreBoard: Human ${humanScore} x Computer ${computerScore}`);
}

playGame();
