// Select the dodger element
const dodger = document.getElementById("dodger");

// Function to move dodger left
function moveDodgerLeft() {
    const leftValue = parseInt(dodger.style.left.replace("px", ""), 10);
    if (leftValue > 0) { // Prevent moving out of bounds
        dodger.style.left = `${leftValue - 10}px`; // Move left by 10px
    }
}

// Function to move dodger right
function moveDodgerRight() {
    const leftValue = parseInt(dodger.style.left.replace("px", ""), 10);
    if (leftValue < 360) { // Assuming container width is 400px
        dodger.style.left = `${leftValue + 10}px`; // Move right by 10px
    }
}

// Add event listeners to detect keypresses
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});
