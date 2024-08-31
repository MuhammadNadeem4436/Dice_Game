var player1 = Math.round(Math.random()*6);
var player2 = Math.round(Math.random()*6);

if (player1 < player2) {
    document.querySelector("h1").innerHTML = "Player 2 is winner 🚩"
}else if(player1 == player2){
    document.querySelector("h1").innerHTML = "Tie 🤝"
}else{
    document.querySelector("h1").innerHTML = "🚩 Player 1 is winner"
}
// player1

if (player1 == 4) {
    document.getElementById("player1").innerHTML = "<img src='./Images/dice4.png' alt='Dice6'>";
}else if(player1 == 6){
    document.getElementById("player1").innerHTML = "<img src='./Images/dice6.png' alt='Dice6'>";
}else if(player1 == 5){
    document.getElementById("player1").innerHTML = "<img src='./Images/dice5.png' alt='Dice6'>";
}else if(player1 == 3){
    document.getElementById("player1").innerHTML = "<img src='./Images/dice3.png' alt='Dice6'>";
}else if(player1 == 2){
    document.getElementById("player1").innerHTML = "<img src='./Images/dice2.png' alt='Dice6'>";
}else{
    document.getElementById("player1").innerHTML = "<img src='./Images/dice1.png' alt='Dice6'>";
}

// player2 

if (player2 == 4) {
    document.getElementById("player2").innerHTML = "<img src='./Images/dice4.png' alt='Dice6'>";
}else if(player2 == 6){
    document.getElementById("player2").innerHTML = "<img src='./Images/dice6.png' alt='Dice6'>";
}else if(player2 == 5){
    document.getElementById("player2").innerHTML = "<img src='./Images/dice5.png' alt='Dice6'>";
}else if(player2 == 3){
    document.getElementById("player2").innerHTML = "<img src='./Images/dice3.png' alt='Dice6'>";
}else if(player2 == 2){
    document.getElementById("player2").innerHTML = "<img src='./Images/dice2.png' alt='Dice6'>";
}else{
    document.getElementById("player2").innerHTML = "<img src='./Images/dice1.png' alt='Dice6'>";
}

