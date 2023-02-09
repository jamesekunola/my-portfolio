// function
const displayMobileNav = () => {
  const hambugerBtn = document.querySelector(".hambuger-menu");
  const closeNavBtn = document.querySelector(".close-nav__btn");
  const asideEl = document.querySelector("aside");
  // show mobile nav
  hambugerBtn.addEventListener("click", () => {
    asideEl.classList.add("show");
  });

  // hide mobile nav
  closeNavBtn.addEventListener("click", () => {
    asideEl.classList.remove("show");
  });
};

const fixedNavbarOnScroll = () => {
  const nav = document.querySelector(".nav-container");
  const navHeight = nav.getBoundingClientRect().height;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    if (scrollTop > navHeight - 20) {
      nav.classList.add("fixed_nav");
    } else {
      nav.classList.remove("fixed_nav");
    }
  });
};

const setDate = () => {
  const dateEl = document.querySelector(".date");
  const date = new Date().getFullYear();

  dateEl.textContent = date;
};

// event listener
window.addEventListener("DOMContentLoaded", () => {
  setDate();
  displayMobileNav();
  fixedNavbarOnScroll();
});
