function loadHeader() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "header.html", true);
  xhr.send();
  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          document.getElementById("header-container").innerHTML = xhr.responseText;
      loadFooter();
      }
  };
}

//  Footer
function loadFooter() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "footer.html", true);
  xhr.send();
  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          document.body.insertAdjacentHTML("beforeend", xhr.responseText);
      }
  };
}

document.getElementById("help-button").addEventListener("click", function() {
  // По нажатию на кнопку Help, покажем видео
  var video = document.getElementById("help-video");
  video.style.display = "block";
  // Затем начнем воспроизведение видео
  video.play();
  
  // Добавим класс "clicked" к кнопке Help
  this.classList.add("clicked");
});

loadHeader();