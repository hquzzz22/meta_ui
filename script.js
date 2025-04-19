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

window.addEventListener("scroll", function () {
  const header = document.querySelector(".fixed-header");
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
