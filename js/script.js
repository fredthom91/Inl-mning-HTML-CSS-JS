
const showOnPx = 100;
const backToTopButton = document.querySelector(".totop-arrow")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})

const goToTop = () => {
    document.body.scrollIntoView();
  };

  backToTopButton.addEventListener("click", goToTop)