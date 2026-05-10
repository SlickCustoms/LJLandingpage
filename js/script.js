const yearNode = document.getElementById("current-year");
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const targetElement = document.querySelector(targetId);

    if (!targetElement) {
      return;
    }

    event.preventDefault();
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: Math.max(targetPosition, 0),
      behavior: "smooth"
    });
  });
});

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
