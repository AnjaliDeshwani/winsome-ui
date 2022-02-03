var toggleBtn = document.querySelector("#toggle-btn");
var floatBtn = document.getElementById("float-btn");
floatBtn.style.display = "none";

var toggleFlag = true;
toggleBtn.addEventListener("click", () => {
  if (toggleFlag) {
    toggleBtn.innerHTML = "Hide";
    floatBtn.style.display = "block";
  } else {
    toggleBtn.innerHTML = "Show";
    floatBtn.style.display = "none";
  }
  toggleFlag = !toggleFlag;
});
