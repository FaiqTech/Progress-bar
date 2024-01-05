const Fill = document.querySelector(".progress__bar-fill");
function setProqress(neceFaiz) {
  Fill.style.width = `${neceFaiz}%`;
}

setProqress(70);
