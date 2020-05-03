const cards = document.querySelectorAll(".card");

for (let i=0; i < cards.length; i++) {
    cards[i].addEventListener("mouseover", function() {
        this.classList.add("card-hover");
    });
    cards[i].addEventListener("mouseout", function() {
        this.classList.remove("card-hover");
        this.style.transition = "all 0.25s";
    })
}