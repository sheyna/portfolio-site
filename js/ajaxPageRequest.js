// PAGES:

// Ajax request for pages:

var xhrPages = new XMLHttpRequest();
xhrPages.onreadystatechange = function() {
  if (xhrPages.readyState === 4) {
    contentTarget.innerHTML = xhrPages.responseText;
  }
};

function openSendAjax(linkedFile) {
  headerTarget.classList.remove('extra-padding-on-top');
  xhrPages.open('GET', linkedFile);
  xhrPages.send();
}

// Button event listeners:

document.getElementById('aboutPageLink').addEventListener("click", function() {
  openSendAjax('pages/about.html');
}, false);

document.getElementById('illustrationLink').addEventListener("click", function() {
  openSendAjax('pages/illustration.html');
}, false);
