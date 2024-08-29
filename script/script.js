document.addEventListener("DOMContentLoaded", function () {
  // Seletor para todas as âncoras no menu de navegação e na logo
  const links = document.querySelectorAll("nav ul li a, .logo a");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
