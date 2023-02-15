//random number for the first image
const randNum1 = Math.floor(Math.random() * 6) + 1

const img1 = document.querySelector(".img1");

const image = "/img/" + "dice" + randNum1 + ".png";

//setting attributes
img1.setAttribute("src", image);

//random number for the second image
const randNum2 = Math.floor(Math.random() * 6) + 1

const img2 = document.querySelector(".img2");

const image2 = "/img/" + "dice" + randNum2 + ".png";

//setting attributes
img2.setAttribute("src", image2);


//if & else conditional statements

if(randNum1 > randNum2){
    document.querySelector("h1").innerHTML = "Congratulations!!! Player 1 wins ";
}else if(randNum1 < randNum2){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "It's a Draw!!";
}

//refresh page 

function refreshPage(){
    window.location.reload();
}

