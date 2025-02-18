// NAVLINK HOVER
gsap.utils.toArray(".navbar-link-text").forEach((link) => {
	link.addEventListener("mouseenter", () => {
	  gsap.to(link, { color: "#52DB83", duration: 0.3, ease: "power2.out" });
	});
	link.addEventListener("mouseleave", () => {
	  if (!link.classList.contains("current")) {
		gsap.to(link, { color: "#FFFFFF", duration: 0.3, ease: "power2.out" });
	  }
	});
  });
gsap.set(".navbar-link-text.current", { color: "#52DB83" });



// HERO ANIMATION
let heroTl = gsap.timeline({ delay: 0.5 }); // 0.5-second delay for loader

// 1️⃣ Navbar banner fades in from the top
heroTl.from(".navbar-banner", {
  y: -50,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
});



// GALLERY 1
let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-gallery-education",
      start: "top bottom", // Starts when section enters viewport
      end: "bottom top", // Ends when leaving viewport
      scrub: 1, // Smooth motion
    },
  });
  
  tl.to(".marquee--1", { xPercent: 25, ease: "none" }, 0).to(
    ".marquee--2",
    { xPercent: -25, ease: "none" },
    0
);

// GALLERY 2
let t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-gallery-women",
    start: "top bottom", // Starts when section enters viewport
    end: "bottom top", // Ends when leaving viewport
    scrub: 1, // Smooth motion
  },
});

tl.to(".marquee--3", { xPercent: 25, ease: "none" }, 0).to(
  ".marquee--4",
  { xPercent: -25, ease: "none" },
  0
);

// GALLERY 3
let t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-gallery-youth",
    start: "top bottom", // Starts when section enters viewport
    end: "bottom top", // Ends when leaving viewport
    scrub: 1, // Smooth motion
  },
});

tl.to(".marquee--5", { xPercent: 25, ease: "none" }, 0).to(
  ".marquee--6",
  { xPercent: -25, ease: "none" },
  0
);


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
  