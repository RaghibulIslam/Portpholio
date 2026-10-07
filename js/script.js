const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 30);
  backTop.classList.toggle("show", window.scrollY > 500);
});

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    projects.forEach(project => {
      const categories = project.dataset.category.split(" ");
      project.classList.toggle("hidden", filter !== "all" && !categories.includes(filter));
    });
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
