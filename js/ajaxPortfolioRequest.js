function getPortfolioItem(fileName, portfolioNumber, type) {
  var xhrPortfolio = new XMLHttpRequest();
  xhrPortfolio.open('GET', fileName);
  xhrPortfolio.onreadystatechange = function () {
    if(xhrPortfolio.readyState === 4 && xhrPortfolio.status === 200) {
      var portfolio = JSON.parse(xhrPortfolio.responseText);
      var statusHTML = '<figure><img src="' + portfolio[portfolioNumber].imageURL + '" \
        alt="' + portfolio[portfolioNumber].title + '" class="' + portfolio[portfolioNumber].imageClass + '"></figure><h1 tabindex="0">\
        ' + portfolio[portfolioNumber].title + '</h1>';
        if (type == "web") {
          statusHTML += '<p tabindex="0"><a href="' + portfolio[portfolioNumber].liveProjectLink + '" \
            target="_blank">View Live Project</a>&nbsp;&nbsp;|&nbsp;&nbsp;\
            <a href="' + portfolio[portfolioNumber].githubLink + '" target="_blank">View Repo on GitHub</a></p>';
        }
        for (var i = 0; i < portfolio[portfolioNumber].description.length; i++) {
          statusHTML += '<p tabindex="0">' + portfolio[portfolioNumber].description[i] + '</p>';
        }
        if (type == "cover") {
          statusHTML += '<img src="' + portfolio[portfolioNumber].sourceImage + '" \
            alt="Source images" class="' + portfolio[portfolioNumber].imageClass + '">';
            // <p tabindex="0">' + portfolio[portfolioNumber].description2 + '</p>\
            // <img src="' + portfolio[portfolioNumber].frontBackImage + '" \
            // alt="' + portfolio[portfolioNumber].title + '" \
            // class="' + portfolio[portfolioNumber].imageClass + '">';
        }
      document.getElementById('portfolioDisplay').innerHTML = statusHTML;
    }
  };
  xhrPortfolio.send();
}
