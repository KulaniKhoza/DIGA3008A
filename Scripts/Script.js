const bar = document.getElementById("burgerbutton");
const nav = document.querySelector("nav");

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burgerbutton");
  const navList = document.querySelector("nav ul");

  burger.addEventListener("click", () => {
    navList.classList.toggle("menuopen");
  });
});
// Smooth scroll to contact section
function scrollToContact() {
  const contactSection = document.getElementById("Contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}
