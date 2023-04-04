const openAccordion = function () {
  const wrapper = document.querySelectorAll('.accordion-wrap');
  const elementsArr = [];
  wrapper.forEach((node) => {
    elementsArr.push(node);
  });

  let titles = document.querySelectorAll('.accordion-title');
  if (titles) {
    elementsArr.forEach((e) => {
      e.classList.remove('no-js');
    });
    titles.forEach((e) => {
      e.classList.remove('accordion-title--none');
    });
    for (let i = 0; i < titles.length; i++) {
      titles[i].onclick = function () {
        this.classList.toggle('active');
        let box = this.nextElementSibling;
        if (box.style.maxHeight) {
          box.style.maxHeight = null;
        } else {
          // box.style.maxHeight = box.scrollHeight + 'px';
          box.style.maxHeight = 100 + '%';
        }
        for (let j = 0; j < titles.length; j++) {
          if (titles[j] !== this) {
            titles[j].classList.remove('active');
            titles[j].nextElementSibling.style.maxHeight = null;
          }
        }
      };
    }
  }
};
export {openAccordion};
