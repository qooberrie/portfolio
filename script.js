function Menu() {
  const items = document.getElementById("menuHamburger");
  const openIcon = document.getElementById("hamburgerOpen");
  const closeIcon = document.getElementById("hamburgerClose");

  const isOpen = items.style.display === "block";

  items.style.display = isOpen ? "none" : "block";
  openIcon.style.display = isOpen ? "block" : "none";
  closeIcon.style.display = isOpen ? "none" : "block";
}

function showSection(section) {
  document
    .querySelectorAll("section")
    .forEach((sec) => sec.classList.remove("active"));
  document
    .querySelectorAll(`.${section}`)
    .forEach((sec) => sec.classList.add("active"));
}
