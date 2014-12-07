console.log("I'm loading");

function getPortfolioItem(fileName, portfolioNumber) {
  var xhrPortfolio = new XMLHttpRequest();
  xhrPortfolio.open('GET', fileName);
  xhrPortfolio.onreadystatechange = function () {
    if(xhrPortfolio.readyState === 4 && xhrPortfolio.status === 200) {
      var portfolio = JSON.parse(xhrPortfolio.responseText);
      var statusHTML = '<figure><img src="' + portfolio[portfolioNumber].imageURL + '" \
        alt="' + portfolio[portfolioNumber].imageAlt + '"></figure><h1 tabindex="0">\
        ' + portfolio[portfolioNumber].h1Title + '</h1><p tabindex="0">\
        ' + portfolio[portfolioNumber].description + '</p>';

      document.getElementById('portfolioDisplay').innerHTML = statusHTML;
    }
  };
  xhrPortfolio.send();
}

document.getElementById('illoMarie').addEventListener("click", function() {
  getPortfolioItem('../pages/illustration.json', 0);
}, false);

document.getElementById('illoCrinoline').addEventListener("click", function() {
  getPortfolioItem('/pages/illustration.json', 1);
}, false);

document.getElementById('illoCouple').addEventListener("click", function() {
  getPortfolioItem('illustration.json', 2);
}, false);
