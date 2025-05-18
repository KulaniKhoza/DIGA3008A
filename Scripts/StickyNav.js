document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  const header = document.querySelector("header");
  let navHeight = nav.offsetHeight;
  let scrollThreshold = header.offsetTop;

  function handleScroll() {
    if (window.scrollY > scrollThreshold) {
      nav.classList.add("sticky-nav");
      document.body.style.paddingTop = navHeight + "px";
    } else {
      nav.classList.remove("sticky-nav");
      document.body.style.paddingTop = 0;
    }
  }

  window.addEventListener("scroll", handleScroll);

  // Recalculate on resize for responsive layouts
  window.addEventListener("resize", function () {
    navHeight = nav.offsetHeight;
    scrollThreshold = header.offsetTop;
    // Update padding if sticky
    if (nav.classList.contains("sticky-nav")) {
      document.body.style.paddingTop = navHeight + "px";
    }
  });
});
