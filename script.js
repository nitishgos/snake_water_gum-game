function playgame(){
    var userchoice=prompt("Enter from S,W,G").toUpperCase();
if(userchoice!=='S' && userchoice!=='W' && userchoice!=='G'){
    alert("Plesase enter a vlid word from S,W and G");
    return;
}
var computerchoices=['S','W','G'];
var computerchoice=computerchoices[Math.floor(Math.random()*computerchoices.length)];
alert("Computer choice: "+computerchoice);
var result;
if(userchoice===computerchoice){
    alert("The match tie");
}else if((userchoice==='S'&& computerchoice==='W')||(userchoice==='W'&& computerchoice==='G')||(userchoice==='G'&& computerchoice==='S')){
    result="You won the game!";
}else{
    result="You loss the game!";
}
alert(result);
var playagain=confirm("Do you want to play again?");
if(playagain){
    playgame();
}else{
    alert("Thanks for playing");
}
}