$(document).ready(function () {
 
  // Initialize brand list slider
  $('.brand-list').slick({
    nav: false,
    arrows: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    pauseOnHover: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  // Initialize Fancybox for elements with [data-fancybox] attribute
  Fancybox.bind('[data-fancybox]', {});

  // Function to create and animate an Odometer when in viewport
  const createOdometer = (el, value) => {
    const odometer = new Odometer({
      el: el,
      value: 0,
    });

    let hasRun = false;

    const options = {
      threshold: [0, 0.9],
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasRun) {
          odometer.update(value);
          hasRun = true;
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  };

  // Initialize odometers for different counters
  const subscribersOdometer = document.querySelector(".subscribers-odometer");
  createOdometer(subscribersOdometer, 35);

  const videosOdometer = document.querySelector(".videos-odometer");
  createOdometer(videosOdometer, 12);

  const projectsOdometer = document.querySelector(".projects-odometer");
  createOdometer(projectsOdometer, 22);

  const test1 = document.querySelector(".test-1");
  createOdometer(test1, 35);

  const test2 = document.querySelector(".test-2");
  createOdometer(test2, 22);

  const test3 = document.querySelector(".test-3");
  createOdometer(test3, 657);

  // Initialize testimonial slider
  $('.testimonial-section-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    dots: true,
    arrows: false
  });

  // Initialize case studies slider
  $('.case-studies-box').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Initialize AOS (Animate On Scroll) library
  AOS.init();

});
