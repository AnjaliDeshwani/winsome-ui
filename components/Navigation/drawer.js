const drawer = document.querySelector(".nav-drawer");
const toggleButtonDrawers = document.querySelector(".navToggleBtn");

toggleButtonDrawers.addEventListener("click", () => {
  const visibility = drawer.getAttribute("data-visible");
  if (visibility === "false") drawer.setAttribute("data-visible", true);
  else drawer.setAttribute("data-visible", false);
  console.log("hi");
});
