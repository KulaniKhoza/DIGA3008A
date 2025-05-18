// Simplified script to highlight active navigation links
document.addEventListener("DOMContentLoaded", () => {
  // Get all navigation links
  const navLinks = document.querySelectorAll("nav.menu ul li a");

  // Get the current page URL
  const currentURL = window.location.pathname;

  // Check if we're on the homepage
  const isHomePage =
    currentURL === "/" ||
    currentURL.endsWith("index.html") ||
    currentURL.endsWith("/");

  // Loop through each navigation link
  navLinks.forEach((link) => {
    // Get the href attribute
    const href = link.getAttribute("href");

    // Skip the Contact link (it's an anchor link)
    if (href === "#Contact") return;

    // Handle homepage link
    if (isHomePage && (href === "index.html" || href === "/" || href === "")) {
      link.classList.add("active");
      return;
    }

    // For other pages, check if the current URL contains the href
    if (currentURL.includes(href) && href !== "" && !href.startsWith("#")) {
      link.classList.add("active");
    }
  });
});
