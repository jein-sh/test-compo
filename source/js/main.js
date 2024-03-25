const initSlider = () => {
  // eslint-disable-next-line
  const swiper = new Swiper('[data-slider', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: {
        el: '[data-mini-slider]',
        breakpoints: {
          320: {
            slidesPerView: 3,
          },
          575: {
            slidesPerView: 4,
          },
        },
      },
    },
  });
};

const initCounter = (evt) => {
  const counter = evt.target.closest('[data-counter]');
  const amount = counter.querySelector('[data-amount]');
  const btnCart = document.querySelector('[data-btn-cart]');

  if (evt.target.closest('[data-plus]') && amount.value < amount.max) {
    amount.value = Number(amount.value) + 1;
  }

  if (evt.target.closest('[data-minus]')) {

    if (amount.value <= 1) {
      counter.classList.remove('is-active');
      btnCart.classList.add('is-active');
    } else {
      amount.value = Number(amount.value) - 1;
    }
  }
};

const initTextInput = () => {
  const text = document.querySelector('[data-count-text]');
  const input = document.querySelector('[data-amount]');

  const count = Number(input.value);

  if (count % 10 === 1 && count !== 11) {
    text.textContent = 'штука';
  } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
    text.textContent = 'штуки';
  } else {
    text.textContent = 'штук';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initSlider();

  document.addEventListener('click', (evt) => {
    if (evt.target.closest('[data-plus]') || evt.target.closest('[data-minus]')) {
      initCounter(evt);
      initTextInput();
    }

    if (evt.target.closest('[data-btn-cart]')) {
      document.querySelector('[data-counter]').classList.add('is-active');
      document.querySelector('[data-btn-cart]').classList.remove('is-active');
    }
  });

  document.addEventListener('input', (evt) => {
    if (evt.target.closest('[data-amount]')) {
      initTextInput(evt.target.value);
    }
  });
});
