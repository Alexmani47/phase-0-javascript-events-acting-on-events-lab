
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftValue = parseInt(dodger.style.left.replace("px", ""), 10);
    if (leftValue > 0) { 
        dodger.style.left = `${leftValue - 10}px`;
    }
}


function moveDodgerRight() {
    const leftValue = parseInt(dodger.style.left.replace("px", ""), 10);
    if (leftValue < 360) {
        dodger.style.left = `${leftValue + 10}px`;
    }
}


document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});
