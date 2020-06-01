

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  if (window.innerWidth < 900) {
    header.classList.add("mobile");
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth < 900) {
      header.classList.add("mobile");
    } else {
      header.classList.remove("mobile");
    }
  });
  document.querySelectorAll(".link-has-children").forEach(parentLink => {
    const linkParentWrapper = parentLink.parentElement;
    const currentParentLinkId = parentLink.dataset.parentId;
    parentLink.addEventListener("click", () => {
      linkParentWrapper.classList.toggle("show-children");
    });
    parentLink.addEventListener("focus", () => {
      const previouslyOpenParentLink = document.querySelector(".show-children");
      if (previouslyOpenParentLink && previouslyOpenParentLink.dataset.parentId !== currentParentLinkId) {
        previouslyOpenParentLink.classList.remove("show-children");
      }
      linkParentWrapper.classList.add("show-children");
    });
  });

  document.querySelectorAll(".header-link:not(.link-has-children):not(.child-link)").forEach(headerLink => {
    headerLink.addEventListener("focus", () => {
      const linkMenuOpen = document.querySelector(".show-children");
      if (linkMenuOpen) {
        linkMenuOpen.classList.remove("show-children");
      }
    });
  });

  const availableIntersectionObserver = "IntersectionObserver" in window;
  const watchedEls = document.querySelectorAll(".observed, .papers-section");
  const subNavLinks = Array.from(document.querySelectorAll(".sub-nav-link"));
  if (availableIntersectionObserver) {
    const observerOptions = {
      root: null,
      rootMargin: "20px",
      threshold: 0.15,
    };

    const onObservation = (entries, observer) => {
      entries.forEach(entry => {
        // if ((entry.intersectionRatio > .15 && entry.target.classList.contains("papers-section"))) {
        //   const sectionId = entry.target.dataset.sectionId;
        //   const previouslyActiveLink = document.querySelector(".sub-nav-link.active");
        //   if (previouslyActiveLink.dataset.sectionId !== entry.target.dataset.sectionId) {
        //     previouslyActiveLink.classList.remove("active");
        //     const newActiveLink = subNavLinks[sectionId];
        //     newActiveLink.classList.add("active");
        //     // subNavLinks[sectionId].classList.add("active");
        //   }
        // }
        if (entry.isIntersecting && entry.target.classList.contains("observed")) {
          entry.target.classList.add("fade-in");
          if (!entry.target.classList.contains("papers-section")) {
            observer.unobserve(entry.target);
          }
        }
      });
    };
    const observer = new IntersectionObserver(onObservation, observerOptions);

    // observer waits for the first step to appear in the view port
    // and adds the "active" class to it.

    watchedEls.forEach(el => {
      observer.observe(el);
    });
  }

  if (!availableIntersectionObserver && watchedEls) {
    // This is an older browser or one that doesn't support Intersection Observer
    // so add "active" class to the first step in "How It Works"
    // and remove "opacity-0" class from cards.
      watchedEls.forEach(card => {
        card.classList.remove("observed");
      });
    }

  const win = window;
  const subNav = document.querySelector(".content-left");
  subNavLinks.forEach(subNavLink => {
    subNavLink.addEventListener("click", (e) => {
      e.preventDefault();
      const papersParagraph = document.querySelector(e.target.dataset.sectionString);
      const newYScroll = papersParagraph.offsetTop+300;
      window.scrollTo(0, newYScroll);
      // if (!subNavLink.classList.contains("active")) {
      //   const previousActive = document.querySelector(".sub-nav-link.active");
      //   previousActive.classList.remove("active");
      //   subNavLink.classList.add("active");
      // }
    });
  });

  win.onscroll = () => {
    if (win.pageYOffset > 300) {
      if (subNav) {
        subNav.classList.add("fix-nav");
      }
      header.classList.add("fix-header");
    } else {
      if (subNav) {
        subNav.classList.remove("fix-nav");
      }
      header.classList.remove("fix-header");
    }
  };

  const bgSpans = document.querySelectorAll(".bg");
  let activeSlideNum = 0;
  const crossFadeImg = () => {
    console.log("CrossFade");
    bgSpans[activeSlideNum].classList.remove("active-slide");
    if (activeSlideNum === 3) {
      activeSlideNum = 0;
    } else {
      activeSlideNum++;
    }
    bgSpans[activeSlideNum].classList.add("active-slide");
    console.log(activeSlideNum);
  };
  if (bgSpans) {
    crossFadeImg();
    window.setInterval(()=> {
      crossFadeImg();
    }, 3500);
  }


  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  if (mobileMenuButton) {
    const toggleMobileMenu = () => {
      mobileMenuButton.classList.toggle("open");
      header.classList.toggle("show-mobile-menu");
    };

    mobileMenuButton.addEventListener("click", () => {
      toggleMobileMenu();
    });

    const headerLinks = document.querySelectorAll(".header-link, .child-link");
    headerLinks.forEach(headerLink => {
      headerLink.addEventListener("click", (e) => {
        if (mobileMenuButton.classList.contains("open")) {
          e.preventDefault();
          toggleMobileMenu();
          document.body.classList.add(".opacity-0");
          setTimeout(() => {
            headerLink.click();
          }, 200);
        }
      });
    });
    document.addEventListener("beforeunload", () => {
      if (mobileMenuButton.classList.contains(open)) {
        toggleMobileMenu();
      }
    });
  }

});
