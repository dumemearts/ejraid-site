// MARQUEE DOUBLE
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-bottom-wrapper",
    start: "top bottom", // Starts when section enters viewport
    end: "bottom top", // Ends when leaving viewport
    scrub: 1, // Smooth motion
  },
});

tl.to(".header-image-list-top", { xPercent: 25, ease: "none" }, 0).to(
  ".header-image-list-bottom",
  { xPercent: -25, ease: "none" },
  0
);

// MARQUEE 2
let tickerTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-ticker",
    start: "top bottom", // Starts when it enters the viewport
    end: "bottom top", // Ends when leaving the viewport
    scrub: 1, // Keeps motion smooth and linked to scroll
  },
});

tickerTl.to(".section-ticker", { xPercent: -25, ease: "none" });

// NAVLINK HOVER
gsap.utils.toArray(".navbar-link-text").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link, { color: "#DBFE02", duration: 0.3, ease: "power2.out" });
  });
  link.addEventListener("mouseleave", () => {
    if (!link.classList.contains("current")) {
      gsap.to(link, { color: "#FFFFFF", duration: 0.3, ease: "power2.out" });
    }
  });
});
gsap.set(".navbar-link-text.current", { color: "#DBFE02" });

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

// NUMBER COUNTER
function animateCounter() {
  gsap.fromTo(
    ".counter-text",
    { innerHTML: 0 },
    {
      innerHTML: 13500,
      duration: 4,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".section-bottom-wrapper",
        start: "top 75%",
        toggleActions: "restart none none none",
      },
      snap: { innerHTML: 1 },
      onUpdate: function () {
        document.querySelector(".counter-text").innerHTML =
          "$" + Math.floor(this.targets()[0].innerHTML).toLocaleString();
      },
    }
  );
}

animateCounter();

// HERO ANIMATION
let heroTl = gsap.timeline({ delay: 3.5 }); // 4-second delay for loader

// 1️⃣ Navbar banner fades in from the top
heroTl.from(".navbar-banner", {
  y: -50,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
});

// 2️⃣ Staggered animations: .pill-regular → .hero-letter → .h1-subtext → .pill-tiny
heroTl
  .from(
    ".pill-regular",
    {
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      ease: "power2.out",
    },
    "+=0.2"
  )

  .from(
    ".hero-letter",
    {
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.05,
    },
    "-=0.3"
  ) // Ensuring stagger effect applies to `.hero-letter`

  .from(
    ".h1-subtext",
    {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.1"
  ) // Plays after `.hero-letter`

  .from(
    ".pill-tiny",
    {
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.3"
  );

// 3️⃣ header-content-right enters smoothly from the right
heroTl.from(
  ".header-content-right",
  {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power3.out",
  },
  "-=0.3"
);

// 4️⃣ .sticky-circle-wrap pops up from the bottom as the last animation
heroTl.from(
  ".sticky-circle-wrap",
  {
    y: 50,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
  },
  "-=0.2"
);

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

document.querySelector(".button").addEventListener("mouseenter", function () {
  gsap.to(".button-text", { 
    scrambleText: { 
      chars: "uppercase", 
      text: "ALL SYSTEMS READY", 
      speed: 1, 
      delimiter: "", 
    }, 
    duration: 1 
  });
});