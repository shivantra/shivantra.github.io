window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var logoToggle = function () {
    const logo = document.body.querySelector("#mainNav .logo");
    const nav = document.body.querySelector("#mainNav");

    if (window.scrollY < window.innerHeight) {
      logo?.classList?.add("invisible");
      nav?.classList?.remove("shadow");
    } else {
      logo?.classList?.remove("invisible");
      nav?.classList?.add("shadow");
    }
  };

  // Toggle the logo
  logoToggle();

  // Show the logo when page is scrolled
  document.addEventListener("scroll", logoToggle);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // Particle
  particlesJS.load("description", "assets/particles.json", function () {
    console.log("callback - particles.js config loaded");
  });

  // ScrollCue
  scrollCue.init({ duration: 1200 });
});
