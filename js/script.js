/** @format */

// Smooth scrolling animation :
// select All links :
// document.ready(function () {
//   check();
// });
document.addEventListener("DOMContentLoaded", () => {
  check();
});

const Links = document.querySelectorAll("a:link");
Links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to the top :
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // Scroll to other links :
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile navigation :
    if (link.classList.contains("header__nav--link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// Make mobile navigation work :
const btnNavEl = document.querySelector(".header__btn--mobile");
let headerEl = document.querySelector(".header");
console.log(btn);

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Sticky navigation :
const heroSectionEl = document.querySelector(".hero");
const options = {};
const obs = new IntersectionObserver(
  function (entries, obs) {
    // entries.forEach(entry => {
    // });
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport :
    root: null,
    threshold: 0,
    // rootMargin: "-80px",
  }
);
function check() {
  if (heroSectionEl) {
    obs.observe(heroSectionEl);
  } else return;
}

// Add Animation :
const logo = document.querySelector(".logo");
const btnCV = document.querySelector(".btnCV");
const horizontalLine = document.querySelector(
  ".hero-section__box--category-bar"
);
const categoryText = document.querySelector(
  ".hero-section__box--category-text"
);
const allLinks = document.querySelectorAll(".header__nav--link");
const headpara = document.querySelectorAll(".welcome");
const heroimg = document.querySelectorAll(".hero-section__img");
const btncontact = document.querySelectorAll(
  ".hero-section__box--buttons-Contact"
);
const btnmore = document.querySelectorAll(".hero-section__box--buttons-More");
window.addEventListener("load", initAnimate());
function initAnimate() {
  console.log(allLinks);

  const Tl = gsap.timeline({});
  Tl.to(btnCV, {
    autoAlpha: 1,
    x: 0,
    duration: 1,
    ease: "power1",
  })
    .to(
      logo,
      {
        autoAlpha: 1,
        x: 0,
        duration: 1,
        ease: "power1",
      },
      "-=0.5"
    )
    .to(
      allLinks,
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power1",
        stagger: 0.1,
      },
      "-=0.75"
    )
    .to(
      categoryText,
      {
        autoAlpha: 1,
        duration: 1,
        ease: "power1",
        y: 0,
        delay: 0.2,
      },
      "-=0.75"
    )
    .to(horizontalLine, {
      width: "20%",
      duration: 0.8,
      ease: "power1",
    })
    .to(
      headpara,
      {
        autoAlpha: 1,
        x: 0,
        duration: 1,
        ease: "power1",
      },
      "-=0.75"
    )
    .to(
      heroimg,
      {
        autoAlpha: 1,
        x: 0,
        duration: 1,
        ease: "power1",
      },
      "-=0.75"
    )
    .to(
      btncontact,
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power1",
      },
      "-=1"
    )
    .to(
      btnmore,
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power1",
      },
      "-=0.75"
    );
}
