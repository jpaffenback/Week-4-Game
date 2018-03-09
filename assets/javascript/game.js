
//Game with 4 crystals (var)


//random numbers generated at beginning of every game
//user clicks crystal to add that number to total score
//total score adds all numbers together
//win: total score = random number
//lose: total score > random number

//win or lose = generate new random numbers (5, 1-target number, 4-crystals)
//add 1 to either win or loss
//reset total score to "0"



//Random number generated - target number (value 19-120)
var targetNumber = Math.floor(Math.random() * 101+19);
function randomWholeNum() {
return Math.random();
}

$("#Target-number").text(targetNumber);
 

//Each crystal has random number assigned (value 1-12)
var randomNumber1 = Math.floor(Math.random() * 11+1);
function randomWholeNum() {
return Math.random();
}
$("#crystal1").click(function(){
   console.log(randomNumber1);
});

var randomNumber2 = Math.floor(Math.random() * 11+1);
function randomWholeNum() {
return Math.random();
}
$("#crystal2").click(function(){
    console.log(randomNumber2);
});

var randomNumber3 = Math.floor(Math.random() * 11+1);
function randomWholeNum() {
return Math.random();
}
$("#crystal3").click(function(){
    console.log(randomNumber3);
});

var randomNumber4 = Math.floor(Math.random() * 11+1);
function randomWholeNum() {
return Math.random();
}
$("#crystal4").click(function(){
    console.log(randomNumber4);
});

//variables for tally
var win =0;
var lose=0;
var score=0;

$("#win").text(win);
$("#lose").text(lose);
$("#Total-Score").text(score);

//reset function
function reset() {
    Math.floor(Math.random() * 101+19);
function randomWholeNum() {
return Math.random();

$("#Target-number").text(targetNumber);
}
randomNumber1 = Math.floor(Math.random() * 11+1);
randomNumber2 = Math.floor(Math.random() * 11+1);
randomNumber3 = Math.floor(Math.random() * 11+1);
randomNumber4 = Math.floor(Math.random() * 11+1);
score=0;
$("#Total-Score").text(score);
}

//adds wins
function winner(){
    alert("What a little mathlete, WINNER!");
    win++;
    $("#win").text(win);
    reset();
}

//adds losses
function loser(){
    alert("Time to invest in a calculator, LOSER!");
    lose++;
    $("#lose").text(lose);
    reset();
}

//clicking crystal adds value to Total Score
$("#crystal1").on ("click", function(){
    score = score + randomNumber1;
    console.log("New score=" +score);
    $("#Total-Score").text(score);
//win or lose statement
    if (score == targetNumber) {
        winner();
    }
    else if (score > targetNumber) {
        loser();
    }
})


$("#crystal2").on ("click", function(){
    score = score + randomNumber2;
    console.log("New score=" +score);
    $("#Total-Score").text(score);
//win or lose statement
    if (score == targetNumber) {
        winner();
    }
    else if (score > targetNumber) {
        loser();
    }
})


$("#crystal3").on ("click", function(){
    score = score + randomNumber3;
    console.log("New score=" +score);
    $("#Total-Score").text(score);
//win or lose statement
    if (score == targetNumber) {
        winner();
    }
    else if (score > targetNumber) {
        loser();
    }
})


$("#crystal4").on ("click", function(){
    score = score + randomNumber4;
    console.log("New score=" +score);
    $("#Total-Score").text(score);
//win or lose statement
    if (score == targetNumber) {
        winner();
    }
    else if (score > targetNumber) {
        loser();
    }
})