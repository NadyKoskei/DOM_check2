document.addEventListener("DOMContentLoaded", () => {
  // take the box and button once the page has loaded.
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  // Setting a starting color so the box is visible right away.
  colorBox.style.backgroundColor = "#4caf50";

  // Generating a random hex color value.
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }

    return color;
  }

  // used to change the box background whenever the button is clicked.
  changeColorBtn.addEventListener("click", () => {
    colorBox.style.backgroundColor = getRandomColor();
  });
});
