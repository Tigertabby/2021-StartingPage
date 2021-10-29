const card = document.getElementById("card");
const card2 = document.getElementById("card2");

card.addEventListener("click", flipCard);

function flipCard(){
    card.classList.toggle("flipCard");

}

