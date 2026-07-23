document.addEventListener("DOMContentLoaded", () => {
  const stickyBar = document.querySelector(".lp-sticky-bar");
  const footer = document.querySelector(".lp-footer");

  if (stickyBar && footer) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        stickyBar.classList.toggle("lp-sticky-bar--hidden", entry.isIntersecting);
      },
      { rootMargin: "0px 0px 0px 0px", threshold: 0 }
    );

    observer.observe(footer);
  }
});
