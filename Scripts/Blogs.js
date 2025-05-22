const totalPages = 13; // Number of blog pages
const currentPage = 3; // Set this dynamically if needed (e.g. using URL)

const pagination = document.getElementById("wrapper");

for (let i = 1; i <= totalPages; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.href = `blog${i}.html`;
  a.textContent = i;

  if (i === currentPage) {
    li.classList.add("active");
  }

  li.appendChild(a);
  pagination.appendChild(li);
}
