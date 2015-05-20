document.getElementById('coverChristmas').addEventListener("click", function() {
  getPortfolioItem('js/coverDesign.json', 0, "cover");
}, false);

document.getElementById('coverCinderella').addEventListener("click", function() {
  getPortfolioItem('js/coverDesign.json', 1, "cover");
}, false);

document.getElementById('coverMidsummer').addEventListener("click", function() {
  getPortfolioItem('js/coverDesign.json', 2, "cover");
}, false);

document.getElementById('coverSimpleSong').addEventListener("click", function() {
  getPortfolioItem('js/coverDesign.json', 3);
}, false);
