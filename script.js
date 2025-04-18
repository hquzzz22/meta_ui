const menuOverlay = document.getElementById("menuOverlay");
const closeMenu = document.getElementById("closeMenu");
const toggleBtn = document.querySelector(".menu-toggle");

toggleBtn.addEventListener("click", () => {
  menuOverlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  menuOverlay.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (
    menuOverlay.classList.contains("active") &&
    !menuOverlay.contains(e.target) &&
    !toggleBtn.contains(e.target)
  ) {
    menuOverlay.classList.remove("active");
  }
});
