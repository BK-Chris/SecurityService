const scrollYThreshold = 100;
const smallImgPath = "imgs/icons8-up-squared-64.png";
const bigImgPath = "imgs/icons8-up-squared-100.png";
const toTheTop = document.getElementById("to-the-top");

// Event listeners
window.addEventListener("scroll", toggleToTheTop);
window.addEventListener("resize", checkMediaQuery);

// Function definitions
function toggleToTheTop() {
  if (window.scrollY > scrollYThreshold) {
    toTheTop.style.display = "block";
  } else {
    toTheTop.style.display = "none";
  }
}

function checkMediaQuery() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    const toTheTopImg = toTheTop.firstElementChild;
    if (toTheTopImg !== null && toTheTopImg.src !== smallImgPath) {
      toTheTopImg.src = smallImgPath;
    }
  } else {
    const toTheTopImg = toTheTop.firstElementChild;
    if (toTheTopImg !== null && toTheTopImg.src !== bigImgPath) {
      toTheTopImg.src = bigImgPath;
    }
  }
}

function copyToClipBoard(text) {
  navigator.clipboard.writeText(text);
}

checkMediaQuery(); // incase the client would start at the middle of the page.
toggleToTheTop();  // incase the client would start at the middle of the page.