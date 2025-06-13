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
/*DownloadEssay1*/
document.querySelector(".DownloadEssay").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "../PDFS/Essay 1.pdf";
  link.download = "Essay 1.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
document
  .querySelector(".DownloadEssay2")
  .addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "../PDFS/Essay 2.pdf";
    link.download = "Essay 2.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
//Async function to load Projects
// Global async function to handle all project buttons
async function openProject(url, button) {
  const originalText = button.innerHTML;

  try {
    // Show loading state (matches your existing style)
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    button.disabled = true;

    await fetch(url, { mode: "no-cors" });

    // Open in new tab (consistent with your simulation behavior)

    window.location.href = url; // Redirect to the project page
  } catch (error) {
    console.error("Error opening project:", error);
    // Error state that matches your style
    button.innerHTML = '<i class="fas fa-exclamation-circle"></i> Failed!';

    // Reset after delay
    setTimeout(() => {
      button.innerHTML = originalText;
      button.disabled = false;
    }, 2000);
    return;
  }

  // Success - reset button after brief delay
  setTimeout(() => {
    button.innerHTML = originalText;
    button.disabled = false;
  }, 1000);
}
