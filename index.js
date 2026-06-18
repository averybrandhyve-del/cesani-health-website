document.addEventListener('DOMContentLoaded', () => {

  // --- MOBILE NAVIGATION ---
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('nav-toggle--active');
      mainNav.classList.toggle('nav--active');
    });
  }

  // Handle mobile submenu expansion on link click
  const navItems = document.querySelectorAll('.nav__item');
  navItems.forEach(item => {
    const link = item.querySelector('.nav__link');
    if (link && item.querySelector('.dropdown-menu')) {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          item.classList.toggle('nav__item--active');
        }
      });
    }
  });



  // --- PROCESS STEP SLIDER ---
  const sliderSlides = document.querySelectorAll('.slider__slide');
  const sliderSteps = document.querySelectorAll('.stepper__step');
  const sliderPrevBtn = document.getElementById('slider-prev');
  const sliderNextBtn = document.getElementById('slider-next');
  const progressNumEl = document.getElementById('slider-progress-num');
  const stepperProgressBar = document.getElementById('stepper-progress-bar');

  let currentSlideIndex = 0;
  const totalSlides = sliderSlides.length;

  function updateSlider() {
    if (totalSlides === 0) return;

    // Update slides visibility
    sliderSlides.forEach((slide, index) => {
      if (index === currentSlideIndex) {
        slide.classList.add('slider__slide--active');
      } else {
        slide.classList.remove('slider__slide--active');
      }
    });

    // Update steps indicator
    sliderSteps.forEach((step, index) => {
      if (index <= currentSlideIndex) {
        step.classList.add('stepper__step--active');
      } else {
        step.classList.remove('stepper__step--active');
      }
    });

    // Update stepper progress line width
    if (stepperProgressBar) {
      const percentage = (currentSlideIndex / (totalSlides - 1)) * 100;
      stepperProgressBar.style.width = `${percentage}%`;
    }

    // Update buttons state
    if (sliderPrevBtn) sliderPrevBtn.disabled = currentSlideIndex === 0;
    if (sliderNextBtn) sliderNextBtn.disabled = currentSlideIndex === totalSlides - 1;

    // Update text helper
    if (progressNumEl) {
      progressNumEl.textContent = `Step ${currentSlideIndex + 1} of ${totalSlides}`;
    }
  }

  if (sliderPrevBtn && sliderNextBtn) {
    sliderPrevBtn.addEventListener('click', () => {
      if (currentSlideIndex > 0) {
        currentSlideIndex--;
        updateSlider();
      }
    });

    sliderNextBtn.addEventListener('click', () => {
      if (currentSlideIndex < totalSlides - 1) {
        currentSlideIndex++;
        updateSlider();
      }
    });
  }

  // Step clicks navigation
  sliderSteps.forEach((step, index) => {
    step.addEventListener('click', () => {
      currentSlideIndex = index;
      updateSlider();
    });
  });

  // Run initial calculation
  updateSlider();


  // --- FAQ ACCORDION ---
  const accordionItems = document.querySelectorAll('.accordion__item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion__header');
    const content = item.querySelector('.accordion__content');

    if (header && content) {
      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('accordion__item--active');

        // Close all other accordion items first
        accordionItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('accordion__item--active');
            const otherContent = otherItem.querySelector('.accordion__content');
            if (otherContent) {
              otherContent.style.maxHeight = null;
            }
          }
        });

        // Toggle current item
        if (isOpen) {
          item.classList.remove('accordion__item--active');
          content.style.maxHeight = null;
        } else {
          item.classList.add('accordion__item--active');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }
  });

});
