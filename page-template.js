// FORM CODE
document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".main-form");
  var successMessage = document.querySelector(".success-message");

  if (!form || !successMessage) {
    console.error("Missing form or success message element.");
    return;
  }

  // Create a MutationObserver to detect new elements added to the DOM
  const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          // Check if the new node is a div with the correct styles
          const computedStyle = window.getComputedStyle(node);
          if (
            node.tagName === "DIV" &&
            computedStyle.marginTop === "16px" && // 1rem in pixels
            computedStyle.marginBottom === "16px"
          ) {
            console.log("Target div detected:", node); // Debugging log

            // Hide the donation form
            form.style.display = "none";

            // Show the success message
            successMessage.style.display = "block";

            // Stop observing after detecting the div
            observer.disconnect();
          }
        }
      });
    });
  });

  // Observe the entire document for changes
  observer.observe(document.body, { childList: true, subtree: true });
});









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
  