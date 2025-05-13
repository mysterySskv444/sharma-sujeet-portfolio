// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // Shrink navbar on scroll
  window.addEventListener("scroll", function () {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      nav.style.padding = "0.5rem 2rem";
      nav.style.boxShadow = "0 2px 15px rgba(0,0,0,0.1)";
    } else {
      nav.style.padding = "1rem 2rem";
      nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
    }
  });