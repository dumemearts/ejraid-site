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
  