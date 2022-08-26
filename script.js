function myfunction(){
    var diceRoll = parseInt(Math.random() * (7 - 1) + 1);
    document.getElementById("die1").innerHTML = diceRoll;
}