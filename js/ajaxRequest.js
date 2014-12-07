// PARTIALS:

// Variables of targets on the page:

var headerTarget = document.getElementById('headerTarget');
var navTarget = document.getElementById('navTarget');
var footerTarget = document.getElementById('footerTarget');
var contentTarget = document.getElementById('contentTarget');

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
  ajaxRequest(navTarget, 'partials/nav.html');
  ajaxRequest(footerTarget, 'partials/footer.html');
};

