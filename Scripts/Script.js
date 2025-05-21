document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burgerbutton");
  const closeBtn = document.getElementById("closeButton");
  const navList = document.querySelector("nav ul");

  // Open menu and switch to close icon
  if (burger) {
    burger.addEventListener("click", () => {
      navList.classList.add("menuopen");
      burger.style.display = "none";
      closeBtn.style.display = "block";
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      navList.classList.remove("menuopen");
      closeBtn.style.display = "none";
      burger.style.display = "block";
    });
  }
  // Close menu and switch back to burger icon
  closeBtn.addEventListener("click", () => {
    navList.classList.remove("menuopen");
    closeBtn.style.display = "none";
    burger.style.display = "block";
  });
});

// Smooth scroll to contact section
function scrollToContact() {
  const contactSection = document.getElementById("Contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}
