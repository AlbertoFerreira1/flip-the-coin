const flipButton = document.getElementById("flipButton");
const coin = document.getElementById("coin");
const coinImage = document.getElementById("coinImage");
const coinText = document.getElementById("coinText");

function flipTheCoin() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber <= 5) {
        coinImage.src ="./resources/heads.svg"
        coinText.textContent = "Heads"
    } else {
        coinImage.src = "./resources/tails.svg"
        coinText.textContent = "Tails";
    }
}

flipButton.addEventListener('click', flipTheCoin);
flipButton.addEventListener('click', flipTheCoin);