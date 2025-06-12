//Fetching repository data
fetch("https://api.github.com/repos/Gifted-one/EchoesOf_a_Machine")
  .then((response) => response.json())
  .then((data) => {
    const repoInfo = document.createElement("div");
    repoInfo.className = "github-stats";
    repoInfo.innerHTML = `
      <p>GitHub Stats: 
        <span>Stars: ${data.stargazers_count}</span>
        <span>Forks: ${data.forks_count}</span>
        <span>Last updated: ${new Date(
          data.updated_at
        ).toLocaleDateString()}</span>
      </p>
    `;
    document.querySelector(".card-content").appendChild(repoInfo);
  })
  .catch((error) => console.error("Error loading GitHub data:", error));

//Simulation button functionality
async function openSimulation() {
  const button = document.querySelector(".view-project-btn");
  const originalText = button.textContent;

  try {
    //  loading state
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    button.disabled = true;

    await fetch("https://wokwi.com/projects/433044341168836609", {
      mode: "no-cors",
      cache: "force-cache",
    });

    // Open in new tab
    window.location.href = "https://wokwi.com/projects/433044341168836609";
  } catch (error) {
    console.error("Simulation error:", error);
    alert("Failed to load simulation. Please try again later.");
  } finally {
    // Restore button state
    button.textContent = originalText;
    button.disabled = false;
  }
}
// Lazy load images
async function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]");

  const loadImage = (img) => {
    return new Promise((resolve) => {
      img.src = img.dataset.src;
      img.onload = () => resolve();
      img.onerror = () => resolve(); // Still resolve even if image fails
    });
  };

  for (const img of images) {
    await loadImage(img);
    await new Promise((resolve) => setTimeout(resolve, 200)); // Short delay
  }
}
document.addEventListener("DOMContentLoaded", () => {
  lazyLoadImages();
});
