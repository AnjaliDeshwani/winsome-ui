const drawer = document.querySelector(".drawer");
const toggleButtonDrawers = document.querySelector(".sidebarIconToggle");

toggleButtonDrawers.addEventListener("click", () => {
  const visibility = drawer.getAttribute("data-visible");
  if (visibility === "false") drawer.setAttribute("data-visible", true);
  else drawer.setAttribute("data-visible", false);
});
