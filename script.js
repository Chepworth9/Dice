function myfunction(){
    var diceSides = document.getElementById("diceSideInput").value;
    var diceRoll = parseInt(Math.random() * (diceSides) + 1);
    document.getElementById("die1").innerHTML = diceRoll;
    
}