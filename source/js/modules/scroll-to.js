// https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll
const scrollTo = (element) => {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth',
  });
};

const intoButton = document.querySelector('.intro__button');
const feedback = document.querySelector('.feedback');

const scrollToProducts = () => {
  if (!feedback) {
    intoButton.style.display = 'none';
  } else {
    intoButton.addEventListener('click', () => {
      scrollTo(feedback);
      // products.scrollIntoView();
    });
  }
};

export {scrollToProducts};
