/*
Rock, Paper, Scissors minigame
Author: NaderHauache.
Date: 09.22.2026
*/

function pickRandomNumber(){
    //Math.random() returns a float in the (0,1) interval.
    let randomNum = Math.random();

    //Divides randomNum by three and judges the third.
    if (randomNum > 0.6)      randomNum = 2;
    else if (randomNum > 0.3) randomNum = 1;
    else                      randomNum = 0;

    //Using bitwise operator to convert 64bit float into integer.
    // Not(Not(a)) = a.
    return ~~randomNum;
}