// Get the elements
const colorBox = document.getElementById("color-box");
const hexCodeDisplay = document.getElementById("hex-code");

// Function to generate a random hex color code
function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to update the color box and display
function updateColorDisplay() {
    const newColor = generateRandomColor();
    colorBox.style.backgroundColor = newColor;
    hexCodeDisplay.textContent = newColor;
}

// Initial color generation and display on page load
updateColorDisplay();

// Add event listener to the color box to change color on click
colorBox.addEventListener("click", updateColorDisplay);