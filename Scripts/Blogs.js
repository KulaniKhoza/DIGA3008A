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
