'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');

// Open Modal
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Close modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// event to open modal
btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

// event to close modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Smooth scroll
btnScrollTo.addEventListener('click', function (e) {
  e.preventDefault();

  // const s1coords = section1.getBoundingClientRect();

  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current Scroll (X/Y) ', window.scrollX, window.scrollY);

  // console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  // scrolling (current position + current scroll)
  // window.scrollTo(s1coords.left + window.scrollX, s1coords.top + window.scrollY);

  // Old Way
  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  // modern way
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page navigation
// solution #1
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     // console.log(id);
//     // console.log(e.target.classList);
//     // console.log(e.target.attributes.href);
//     // console.log(e.target.dataset);
//     // console.log('LINK');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Solution #2 ... better strategy
// 1. Add evebt listener to common parent element
// 2. Determine What element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed Component

// adding events
// tabs.forEach(t => t.addEventListener('click', e => console.log(e.target.dataset.tab)));

tabsContainer.addEventListener('click', function (e) {
  // Note if we clicked on the span element , it will not get us the parent btn, so we use closest method to get that tab
  const clicked = e.target.closest('.operations__tab');

  // Guard clause, if there's no element exit the function
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(e => e.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate content area
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function (el, opacity) {
  if (el.target.classList.contains('nav__link')) {
    const link = el.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opaicty = opacity;
  }
};
nav.addEventListener('mouseover', el => handleHover(el, 0.25));
nav.addEventListener('mouseout', el => handleHover(el, 1));

// Sticky navigation
// bad for performance because of multiple sroll events//
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function () {
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// Sticky navigation using intersection observer

// const obsCallback = function (entries, observer) {
//   //entries is the array of thresholds defined in the options
//   entries.forEach(entry => console.log(entry));
// };

// const obsOptions = {
//   // this is the root element who will watch for another element
//   // if null it will be the entire viewport
//   root: null,
//   // the percentage of entersection on which the callback function will be called
//   threshold: 0.1,
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);

// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const obsStickyNav = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const obsStickyNavOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const headerObserver = new IntersectionObserver(obsStickyNav, obsStickyNavOptions);

headerObserver.observe(header);

// Reveal Sections
const obsRevealSections = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  if (entry.isIntersecting) entry.target.classList.remove('section--hidden');

  // remove the observer after adding the effect
  observer.unobserve(entry.target);
};

const obsRevealSectionsOptions = {
  root: null,
  threshold: 0,
  rootMargin: '-15%',
};

const revealSectionsObserver = new IntersectionObserver(obsRevealSections, obsRevealSectionsOptions);

const sections = document.querySelectorAll('.section');
sections.forEach(section => {
  revealSectionsObserver.observe(section);
  section.classList.add('section--hidden');
});

// Lazy loading images
const images = document.querySelectorAll('img[data-src]');

const obsShowImage = function (entries, observer) {
  const [imgEntry] = entries;
  const imageElement = imgEntry.target;
  if (!imgEntry.isIntersecting) return;

  // Replace the data source
  imageElement.src = imageElement.dataset.src;

  // remove the lazyloading after the image is fully loaded
  imageElement.addEventListener('load', function () {
    imageElement.classList.remove('lazy-img');
  });

  observer.unobserve(imageElement);
};

const obsShowImageOptions = {
  root: null,
  threshold: 0,
  rootMargin: '50%',
};

const imgObserver = new IntersectionObserver(obsShowImage, obsShowImageOptions);

images.forEach(image => imgObserver.observe(image));

////////////////////////////////////////////
// Slider
////////////////////////////////////////////
const sliderComponent = function () {
  // Select elements
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotsContainer = document.querySelector('.dots');
  const maxSlides = slides.length;
  let currentSlide = 0;

  // Functions
  const goToSlide = function (slideNum) {
    slides.forEach((s, i) => (s.style.transform = `translateX(${(i - slideNum) * 100}%)`));
  };

  const nextSlide = function () {
    if (currentSlide === maxSlides - 1) currentSlide = 0;
    else currentSlide++;

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const prevSlide = function () {
    if (currentSlide == 0) {
      currentSlide = maxSlides - 1;
    } else currentSlide--;

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  // Dots
  const createDots = function () {
    slides.forEach((_, i) =>
      dotsContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`)
    );
  };

  const activateDot = function (slide) {
    const dots = document.querySelectorAll('.dots__dot[data-slide]');
    // remove active class from all dots
    dots.forEach((d, i) => d.classList.remove('dots__dot--active'));
    // add active class to the specified dot
    dots[slide].classList.add('dots__dot--active');
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  init();

  // Event Listeners

  // Next Slide
  btnRight.addEventListener('click', nextSlide);

  // Prev Slide
  btnLeft.addEventListener('click', prevSlide);

  // move slider using keyboard
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });

  dotsContainer.addEventListener('click', function (e) {
    const currentDot = e.target;
    if (currentDot.classList.contains('dots__dot')) {
      const { slide } = currentDot.dataset;
      goToSlide(slide);
      //add active class to current dot
      activateDot(slide);
      currentSlide = +slide;
    }
  });
};

sliderComponent();
