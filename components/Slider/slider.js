let slider = document.querySelector(".slider");

let value = document.querySelector(".slider-value");

slider.addEventListener("change", () => {
  value.innerText = slider.value;
});
