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
});
window.addEventListener("resize", () => {
  const burger = document.getElementById("burgerbutton");
  const closeBtn = document.getElementById("closeButton");
  const navList = document.querySelector("nav ul");

  if (window.innerWidth > 940) {
    navList.classList.remove("menuopen");
    burger.style.display = "none";
    closeBtn.style.display = "none";
  } else {
    burger.style.display = "block";
    closeBtn.style.display = "none";
  }
});
window.onload = function () {
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", function () {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};

// Smooth scroll to contact section
function scrollToContact() {
  const contactSection = document.getElementById("Contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}
