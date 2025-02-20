// NAVLINK HOVER
gsap.utils.toArray(".navbar-link-text").forEach((link) => {
	link.addEventListener("mouseenter", () => {
	  gsap.to(link, { color: "#24E669", duration: 0.3, ease: "power2.out" });
	});
	link.addEventListener("mouseleave", () => {
	  if (!link.classList.contains("current")) {
		gsap.to(link, { color: "#FFFFFF", duration: 0.3, ease: "power2.out" });
	  }
	});
  });
gsap.set(".navbar-link-text.current", { color: "#24E669" });







// STICKY CIRCLE
ScrollTrigger.matchMedia({
  "(min-width: 990px)": function () {
    $(".sticky-circle-wrap").each(function (index) {
      let triggerElement = $(this);
      let targetElement = $(".sticky-circle-element");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      tl.fromTo(
        targetElement,
        {
          width: "40em",
          height: "40em",
          borderTopLeftRadius: "40em",
          borderTopRightRadius: "40em",
          borderBottomLeftRadius: "40em",
          borderBottomRightRadius: "40em",
          borderBottomWidth: "1.8em",
          duration: 1,
        },
        {
          width: "100vw",
          height: "90vh",
          borderTopLeftRadius: "0em",
          borderTopRightRadius: "0em",
          borderBottomLeftRadius: "0em",
          borderBottomRightRadius: "0em",
          borderBottomWidth: "0em",
          duration: 1,
        }
      );
    });
  },
});





// MARQUEE 1
let tickerTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".ticker-wrapper",
    start: "top bottom", // Starts when it enters the viewport
    end: "bottom top", // Ends when leaving the viewport
    scrub: 1, // Keeps motion smooth and linked to scroll
  },
});

tickerTl.to(".ticker-wrapper", { xPercent: -25, ease: "none" });






// PARAGRAPH SPLIT TEXT 
const splitTypes = document.querySelectorAll('.scroll-highlight');
splitTypes.forEach((char,i) => {
  const text = new SplitType(char, {types: ['chars','words']});
  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: 'top 80%',
      end: 'top 20%',
      scrub: true,
    },
    opacity: 0.2,
    stagger: 0.1,
  })
});




// NUMBER COUNTER 1
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  function animateCounter() {
    let counter = { value: 0 }; // Proxy object for animation

    gsap.to(counter, {
      value: 215, // Target number
      duration: 3,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".counter-card.is--3",
        start: "top 75%",
        toggleActions: "restart none none none",
      },
      onUpdate: function () {
        document.querySelector(".counter-text.is--naira").innerHTML =
          "" + Math.floor(counter.value).toLocaleString();
      },
    });
  }

  animateCounter();
});



// NUMBER COUNTER 2
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  function animateCounter() {
    let counter = { value: 0 }; // Proxy object for animation

    gsap.to(counter, {
      value: 50, // Target number
      duration: 3,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".counter-card.is--2",
        start: "top 75%",
        toggleActions: "restart none none none",
      },
      onUpdate: function () {
        document.querySelector(".counter-text.is--community").innerHTML =
          "" + Math.floor(counter.value).toLocaleString();
      },
    });
  }

  animateCounter();
});



// NUMBER COUNTER 3
function animateCounter() {
  gsap.fromTo(
    ".counter-text.is--meals",
    { innerHTML: 0 },
    {
      innerHTML: 500,
      duration: 3,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".counter-card.is--1",
        start: "top 75%",
        toggleActions: "restart none none none",
      },
      snap: { innerHTML: 1 },
      onUpdate: function () {
        document.querySelector(".counter-text.is--meals").innerHTML =
          "" + Math.floor(this.targets()[0].innerHTML).toLocaleString();
      },
    }
  );
}

animateCounter();




// MARQUEE 2
let tickerTl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".ticker-section",
    start: "top bottom", // Starts when it enters the viewport
    end: "bottom top", // Ends when leaving the viewport
    scrub: 1, // Keeps motion smooth and linked to scroll
  },
});

tickerTl2.to(".ticker-section", { xPercent: 25, ease: "none" });




// CTA-ANIMATION
  gsap.to(".cta-background-image", {
    y: (index, target) => -target.clientHeight * 0.1, // Moves upward as the page scrolls down
    ease: "none",
    scrollTrigger: {
      trigger: ".cta-card", // Scroll trigger
      start: "top bottom", // Starts when .cta-card enters viewport
      end: "bottom top", // Ends when .cta-card leaves viewport
      scrub: 1, // Smooth scrolling effect
    },
});
  




// STAR ROTATE
gsap.to(".star-vector,.star-icon", {
  rotation: 360,
  duration: 2,
  repeat: -1,
  ease: "linear",
  });
  document
  .querySelector(".star-vector")
  .addEventListener("mouseenter", function () {
    gsap.to(this, { scale: 1.2, duration: 0.3, ease: "power2.out" });
  });
  document
  .querySelector(".star-vector")
  .addEventListener("mouseleave", function () {
    gsap.to(this, { scale: 1, duration: 0.3, ease: "power2.inOut" });
});





// FOOTER ANIMATION
gsap.from(".footer-letter", {
  y: 100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".footer-wrapper",
    start: "top 75%",
    toggleActions: "restart pause resume pause",
    once: false,
  },
});






// HEADING SPLIT TEXT
let windowWidth = window.outerWidth;

$(".split-text").each(function (index) {
  let myText = $(this);
  let mySplitText;
  function createSplits() {
    mySplitText = new SplitText(myText, {
      type: "chars,words,lines",
      charsClass: "split-chars",
      wordsClass: "split-words",
      linesClass: "split-lines"
    });
  }
  createSplits();
  $(window).resize(function () {
  	if (window.outerWidth !== windowWidth) {
    	mySplitText.revert();
			location.reload();
    }
    windowWidth = window.outerWidth;
  });
});

gsap.registerPlugin(ScrollTrigger);

function createTextAnimations() {
  // Line Animation
  $(".line-animation").each(function (index) {
    let triggerElement = $(this);
    let myText = $(this).find(".split-text");
    let targetElement = $(this).find(".split-lines");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top",
        toggleActions: "restart none none none"
      }
    });
    tl.from(targetElement, {
      duration: 0.5,
      y: "150%",
      rotationX: -90,
      opacity: 0,
      ease: "power1.inOut",
      stagger: {
        amount: 0.4,
        from: "0"
      }
    });
  });
  // Word Animation
  $(".word-animation").each(function (index) {
    let triggerElement = $(this);
    let myText = $(this).find(".split-text");
    let targetElement = $(this).find(".split-words");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top",
        toggleActions: "restart none none none"
      }
    });
    tl.from(targetElement, {
      duration: 0.3,
      y: "80%",
      rotationX: -90,
      opacity: 0,
      ease: "power1.inOut",
      stagger: {
        amount: 0.9,
        from: "0"
      }
    });
  });
  // Letter Animation
  $(".letter-animation").each(function (index) {
    let triggerElement = $(this);
    let myText = $(this).find(".split-text");
    let targetElement = $(this).find(".split-chars");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top",
        toggleActions: "restart none none none"
      }
    });
    tl.from(targetElement, {
      duration: 0.5,
      y: "60%",
      opacity: 0,
      rotationX: -90,
      ease: "power1.inOut",
      stagger: {
        amount: 0.7,
        from: "0"
      }
    });
  });
}
createTextAnimations();


