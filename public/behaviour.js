var loadingPage = document.getElementById("loading");
var main = document.querySelector(".MAIN")
function showLoadingPage() {
  loadingPage.style.display = "block";
  main.style.display = "none"
}

function hideLoadingPageWithDelay(delay) {
    setTimeout(function() {
      loadingPage.style.display = "none";
      main.style.display = "block"
    }, delay);
  }

showLoadingPage();
hideLoadingPageWithDelay(5000)