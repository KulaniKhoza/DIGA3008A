document.addEventListener("DOMContentLoaded", function () {
  const blogPages = [1, 2, 3, 4, 7, 9, 10, 11, 12, 13]; // Custom order
  const paginationButtons = document.querySelectorAll("#wrapper .numb");

  paginationButtons.forEach((button, index) => {
    if (blogPages[index]) {
      button.addEventListener("click", () => {
        window.location.href = `Blog${blogPages[index]}.html`;
      });
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const currentURL = window.location.pathname;
  const blogPageMatch = currentURL.match(/Blog(\d+)\.html$/i);

  if (blogPageMatch) {
    const currentPage = blogPageMatch[1];
    const paginationItems = document.querySelectorAll("footer ul li.numb");

    paginationItems.forEach((item) => {
      if (item.textContent.trim() === currentPage) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
});
