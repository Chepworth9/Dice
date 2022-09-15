function myfunction(){
    var dicePouch = document.getElementById("dicePouch");
    removeAllChildNodes(dicePouch)
    var diceSides = document.getElementById("diceSideInput").value;
    var numberDice = document.getElementById("diceNumberInput").value;
    for(var i = 0; i < numberDice; i++){
     var die = document.createElement("div");
     die.id = "die" + i;
     die.className = "dice";
     var diceRoll = parseInt(Math.random() * (diceSides) + 1);
     die.innerHTML = diceRoll;
     dicePouch.appendChild(die);
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}