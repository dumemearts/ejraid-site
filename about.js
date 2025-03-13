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




// HERO ANIMATION
let heroTl = gsap.timeline({ delay: 0.5 }); // 0.5-second delay for loader

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
    ".heading-style-h1.text-align-center",
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
    ".text-size-regular.text-align-center",
    {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.1"
  ) // Plays after `.hero-letter`

  .from(
    ".button-group",
    {
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.3"
  );

// 4️⃣ .sticky-circle-wrap pops up from the bottom as the last animation
heroTl.from(
  ".hero-right-image-wrapper",
  {
    y: 50,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
  },
  "-=0.2"
);





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
  