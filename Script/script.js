const Container = document.querySelector(".Container");
const btnsingin = document.getElementById("btn-sign-in");
const btnsingup = document.getElementById("btn-sign-up");

btnsingin.addEventListener("click", () => {
    Container.classList.remove("toggle");
});

btnsingup.addEventListener("click", () => {
    Container.classList.add("toggle");
});

