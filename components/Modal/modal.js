var modalBlock = document.querySelector("#modal-block");
var showModalBtn = document.querySelector("#show-modal");
var closeBtn = document.querySelector("#modal-close-btn");

showModalBtn.addEventListener(
  "click",
  () => (modalBlock.style.display = "flex")
);

modalBlock.addEventListener("click", (event) => {
  if (event.target === modalBlock) modalBlock.style.display = "none";
});

closeBtn.addEventListener("click", () => (modalBlock.style.display = "none"));
