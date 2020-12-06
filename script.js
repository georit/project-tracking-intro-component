/* *****variables***** */
const bodyEl = document.querySelector("body");
const mobileNav = document.querySelector(".nav-links");
const mobileNavToggle = document.getElementById("mobile-nav-toggle");

/* *****functions***** */
//display mobile navigation
function showMobileNav() {
  // change icon to close icon
  mobileNavToggle.className = "fas fa-times mobile-nav-toggle";
  // display mobile navigation links
  mobileNav.classList.remove("hidden");
  // disable body scroll on body
  bodyEl.classList.add("scroll");
}

//hide mobile navigation
function hideMobileNav() {
  // change icon to close hamburger menu
  mobileNavToggle.className = "fas fa-bars mobile-nav-toggle";
  // display mobile navigation links
  mobileNav.classList.add("hidden");
  // disable body scroll on body
  bodyEl.classList.remove("scroll");
}

/* *****event listeners***** */
// display/hide mobile navigation links
mobileNavToggle.addEventListener("click", () => {
  if (mobileNavToggle.classList.contains("fa-bars")) {
    showMobileNav();
  } else {
    hideMobileNav();
  }
});

// navigate to clicked link
mobileNav.addEventListener("click", (e) => {
  let navLink = e.target;

  if (navLink.className === "nav-link-anchor") {
    hideMobileNav();
  }
});
