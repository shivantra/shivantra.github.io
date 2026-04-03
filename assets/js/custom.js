// Works in both vanilla HTML (DOMContentLoaded fires later) and
// Next.js afterInteractive (DOMContentLoaded already fired).
function onReady(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

onReady(function () {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".fbs__net-navbar .scroll-link");

  function removeActiveClasses() {
    if (navLinks) {
      navLinks.forEach((link) => link.classList.remove("active"));
    }
  }

  function addActiveClass(currentSectionId) {
    const activeLink = document.querySelector(
      `.fbs__net-navbar .scroll-link[href="#${currentSectionId}"]`
    );
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  function getCurrentSection() {
    let currentSection = null;
    let minDistance = Infinity;
    if (sections) {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - window.innerHeight / 4);
        if (distance < minDistance && rect.top < window.innerHeight) {
          minDistance = distance;
          currentSection = section.getAttribute("id");
        }
      });
    }
    return currentSection;
  }

  function updateActiveLink() {
    const currentSectionId = getCurrentSection();
    if (currentSectionId) {
      removeActiveClasses();
      addActiveClass(currentSectionId);
    }
  }

  window.addEventListener("scroll", updateActiveLink);
});

const navbarScrollInit = () => {
  var navbar = document.querySelector(".fbs__net-navbar");
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (navbar) {
    if (scrollTop > 0) {
      navbar.classList.add("active");
    } else {
      navbar.classList.remove("active");
    }
  }
};

const navbarInit = () => {
  document.querySelectorAll('.dropdown-toggle[href="#"]').forEach(function (el) {
    el.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });
};

onReady(function () {
  navbarInit();
  window.addEventListener("scroll", navbarScrollInit);
});

// ======= BS OffCanvas =======
const bsOffCanvasInit = () => {
  var offcanvasElement = document.getElementById("fbs__net-navbars");
  if (offcanvasElement) {
    offcanvasElement.addEventListener("show.bs.offcanvas", function () {
      document.body.classList.add("offcanvas-active");
    });
    offcanvasElement.addEventListener("hidden.bs.offcanvas", function () {
      document.body.classList.remove("offcanvas-active");
    });
  }
};
onReady(bsOffCanvasInit);

// ======= Back To Top =======
const backToTopInit = () => {
  const backToTopButton = document.getElementById("back-to-top");
  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        backToTopButton.classList.add("show");
      } else {
        backToTopButton.classList.remove("show");
      }
    });
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
};
onReady(backToTopInit);

// ======= WhatsApp Connect =======
const whatsappConnectInit = () => {
  const whatsappConnectButton = document.getElementById("whatsapp-connect");
  if (whatsappConnectButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        whatsappConnectButton.classList.add("show");
      } else {
        whatsappConnectButton.classList.remove("show");
      }
    });
  }
};
onReady(whatsappConnectInit);

// ======= Inline SVG =======
const inlineSvgInit = () => {
  const imgElements = document.querySelectorAll(".js-img-to-inline-svg");
  if (imgElements) {
    imgElements.forEach((imgElement) => {
      const imgURL = imgElement.getAttribute("src");
      fetch(imgURL)
        .then((response) => response.text())
        .then((svgText) => {
          const parser = new DOMParser();
          const svgDocument = parser.parseFromString(svgText, "image/svg+xml");
          const svgElement = svgDocument.documentElement;
          Array.from(imgElement.attributes).forEach((attr) => {
            if (attr.name !== "class") {
              svgElement.setAttribute(attr.name, attr.value);
            } else {
              const classes = attr.value
                .split(" ")
                .filter((className) => className !== "js-img-to-inline-svg");
              if (classes.length > 0) {
                svgElement.setAttribute("class", classes.join(" "));
              }
            }
          });
          imgElement.replaceWith(svgElement);
        })
        .catch((error) => console.error("Error fetching SVG:", error));
    });
  }
};
onReady(inlineSvgInit);

// ======= Disable Click Navbar Dropdown =======
const addHoverEvents = (dropdown) => {
  const dropdownToggle = dropdown.querySelector(".dropdown-toggle");
  const preventClick = (event) => event.preventDefault();
  const showDropdown = () => {
    dropdown.classList.add("show");
    dropdownToggle.setAttribute("aria-expanded", "true");
    dropdown.querySelector(".dropdown-menu").classList.add("show");
  };
  const hideDropdown = () => {
    dropdown.classList.remove("show");
    dropdownToggle.setAttribute("aria-expanded", "false");
    dropdown.querySelector(".dropdown-menu").classList.remove("show");
  };
  dropdownToggle.addEventListener("click", preventClick);
  dropdown.addEventListener("mouseover", showDropdown);
  dropdown.addEventListener("mouseleave", hideDropdown);
  dropdown.__events = { preventClick, showDropdown, hideDropdown };
};

const removeHoverEvents = (dropdown) => {
  const dropdownToggle = dropdown.querySelector(".dropdown-toggle");
  const { preventClick, showDropdown, hideDropdown } = dropdown.__events || {};
  if (preventClick) {
    dropdownToggle.removeEventListener("click", preventClick);
    dropdown.removeEventListener("mouseover", showDropdown);
    dropdown.removeEventListener("mouseleave", hideDropdown);
    delete dropdown.__events;
  }
};

const handleNavbarEvents = () => {
  const dropdowns = document.querySelectorAll(".navbar .dropdown");
  const dropstarts = document.querySelectorAll(".navbar .dropstart");
  const dropends = document.querySelectorAll(".navbar .dropend");
  if (window.innerWidth >= 992) {
    dropdowns.forEach(addHoverEvents);
    dropstarts.forEach(addHoverEvents);
    dropends.forEach(addHoverEvents);
  } else {
    dropdowns.forEach(removeHoverEvents);
    dropstarts.forEach(removeHoverEvents);
    dropends.forEach(removeHoverEvents);
  }
};

const handleResize = () => {
  const dropdowns = document.querySelectorAll(".navbar .dropdown");
  const dropstarts = document.querySelectorAll(".navbar .dropstart");
  const dropends = document.querySelectorAll(".navbar .dropend");
  dropdowns.forEach(removeHoverEvents);
  dropstarts.forEach(removeHoverEvents);
  dropends.forEach(removeHoverEvents);
  handleNavbarEvents();
};

window.addEventListener("resize", handleResize);
handleNavbarEvents();

// ======= AOS =======
onReady(() => {
  AOS.init({ duration: 800, easing: "ease", once: true });
});
