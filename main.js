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


loadHeader();