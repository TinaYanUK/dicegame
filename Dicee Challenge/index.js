var randomNumber1 = Math.floor(Math.random()*6)+1;
var p1 = document.querySelector(".img1");
var diceImg1 = "images/dice"+randomNumber1+".png";
var randomNumber2 = Math.floor(Math.random()*6)+1;
var p2 = document.querySelector(".img2");
var diceImg2 = "images/dice"+randomNumber2+".png";

p1.setAttribute("src",diceImg1);
p2.setAttribute("src",diceImg2);

if (randomNumber1 == randomNumber2){
  document.querySelector("h1").innerHTML="Daw!";
}else if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else{
  document.querySelector("h1").innerHTML="Player 2 Wins!";
}
