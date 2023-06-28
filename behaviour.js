var loadingPage = document.getElementById("loading");
var main = document.querySelector(".MAIN")
var isLoaded = false
function showLoadingPage() {
  loadingPage.style.display = "block";
  main.style.display = "none"
}

function hideLoadingPageWithDelay(delay) {
    setTimeout(function() {
      loadingPage.style.display = "none";
      main.style.display = "block"
      isLoaded = true
    }, delay);
  }

showLoadingPage();
hideLoadingPageWithDelay(5000)
if (isLoaded){
  const sr = ScrollReveal();
  sr.reveal('.intro')
  sr.reveal('.about')
  sr.reveal('.works')
  sr.reveal('.services')
  sr.reveal('.testimonials')
  sr.reveal('.process')
}