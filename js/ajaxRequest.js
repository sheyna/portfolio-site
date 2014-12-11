// PARTIALS:

// Variables of targets on the page:

var headerTarget = document.getElementById('headerTarget');
var navTarget = document.getElementById('navTarget');
var footerTarget = document.getElementById('footerTarget');
var contentAboutTarget = document.getElementById('contentAboutTarget');
var contentIllustrationTarget = document.getElementById('contentIllustrationTarget');

function getLinks() {
  var xhrLinks = new XMLHttpRequest();
  xhrLinks.open('GET', 'js/navLinks.json');
  xhrLinks.onreadystatechange = function () {
    if(xhrLinks.readyState === 4 && xhrLinks.status === 200) {
      var navLinks = JSON.parse(xhrLinks.responseText);
      var statusHTML = '<ul>';
      for (var i = 0; i < navLinks.length; i++) {
        statusHTML += '<li><a href="' + navLinks[i].url + '"> \
        ' + navLinks[i].text + '</a>';
      }
      statusHTML += '</ul>';
      navTarget.innerHTML = statusHTML;
    }
  };
  xhrLinks.send();
}

// Ajax request for partials:

function ajaxRequest(target, linkedFile) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      target.innerHTML = xhr.responseText;
    }
  };
  xhr.open('GET', linkedFile);
  xhr.send();
}

window.onload = function() {
  ajaxRequest(headerTarget, 'partials/header.html');
  getLinks();
  ajaxRequest(footerTarget, 'partials/footer.html');
};

