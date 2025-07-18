// Toggle between Light and Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Floating Icons - Optional future animations or hover effects
document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".icon");

  icons.forEach((icon, index) => {
    icon.addEventListener("mouseover", () => {
      icon.style.transform = "scale(1.2)";
    });

    icon.addEventListener("mouseout", () => {
      icon.style.transform = "scale(1)";
    });
  });
});

// Future Scroll Reveal Animations (if needed)
/*
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;
    if (position < screenPos) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
});
*/
// Handle Opinion Form Submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("opinionForm");
  const thankYouMsg = document.getElementById("thankYouMsg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    thankYouMsg.classList.add("show");
    form.reset();
  });
});
