/*
Rock, Paper, Scissors minigame
Author: NaderHauache.
Date: 09.22.2026
*/

function toInt(dfloatNum){
    return ~~dfloatNum;
}

function pickRandomNumber(){
    //Math.random() returns a float in the (0,1) interval.
    let randomNum = Math.random();

    //Divides randomNum by three and judges the third.
    if (randomNum > 0.6)
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

//Not consideringa a wrong input from user.
function getHumanChoice(){
    let loopExit = false;
    while (loopExit == false){
        let userChoice = prompt("Your turn! Choose one option: \
                            Rock = 0 \
                            Paper = 1 \
                            Scissor = 2");
        if (userChoice < 3 && userChoice >= 0)
            loopExit = true;
    }
    return userChoice;
}

function abortGame(currentTurn, totalTurn){
    let abortAsk = confirm(`Would you like to abort the game ? \
                            Remains: ${currentTurn} / ${totalTurn}.`);

    return abortAsk;
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
    
