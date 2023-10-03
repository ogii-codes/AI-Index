// Randomize the order of website cards
var websiteList = document.querySelector(".website-list");
var websiteCards = Array.from(
  websiteList.getElementsByClassName("website-card")
);
websiteCards.forEach(function (card) {
  websiteList.removeChild(card);
});
shuffleArray(websiteCards);
websiteCards.forEach(function (card) {
  websiteList.appendChild(card);
});

// Function to shuffle an array
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function randomColor() {
  var brightnessThreshold = 128; // Threshold for brightness value (0-255)

  // Generate random values for red, green, and blue
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  // Calculate the brightness of the color
  var brightness = Math.round((r * 299 + g * 587 + b * 114) / 1000);

  // Adjust the color if it doesn't meet the contrast threshold
  if (brightness > brightnessThreshold) {
    r = Math.floor(r * 0.7);
    g = Math.floor(g * 0.7);
    b = Math.floor(b * 0.7);
  }

  // Create a CSS color string using the adjusted or original values
  var color = "rgb(" + r + ", " + g + ", " + b + ")";

  return color;
}

var websiteCards = document.querySelectorAll(".website-card");

websiteCards.forEach(function (card) {
  card.style.backgroundColor = randomColor();
});

var websiteCards = document.querySelectorAll(".website-card");

websiteCards.forEach(function (card) {
  card.addEventListener("click", function () {
    var urlElement = this.querySelector("a");
    var url = urlElement.getAttribute("href");
    window.location.href = url;
  });
});

document
  .querySelector(".search-input")
  .addEventListener("keyup", function () {
    var filter = this.value.toUpperCase();
    var websites = document.querySelectorAll(".website-card");

    websites.forEach(function (website) {
      var name = website.querySelector("h2");
      var description = website.querySelector("p");
      var Tags = website.querySelector("p:nth-of-type(3)");

      var shouldDisplay =
        name.textContent.toUpperCase().includes(filter) ||
        description.textContent.toUpperCase().includes(filter) ||
        Tags.textContent.toUpperCase().includes(filter);
      website.style.display = shouldDisplay ? "" : "none";
    });
  });
