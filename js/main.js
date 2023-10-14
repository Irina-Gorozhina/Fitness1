
function triggerBurger() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
  }

function loadHeader() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "header.html", true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("header-container").innerHTML = xhr.responseText;
            loadFooter();
            triggerBurger();
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
