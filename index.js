var submitted = false;

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 1. Initial Load Animations
const tl = gsap.timeline();

tl.from(".gs-reveal", {
    y: -20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out"
})
.from(".gs-hero", {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power4.out"
}, "-=0.5")
.from(".gs-hero-image", {
    x: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
}, "-=0.8");

// 2. Scroll Animations
gsap.from(".gs-fade-up", {
    scrollTrigger: {
        trigger: ".gs-fade-up",
        start: "top 80%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

// 3. Futuristic Mouse Tracking Glow Effect
const mouseGlow = document.getElementById('mouseGlow');
document.addEventListener('mousemove', (e) => {
    // Smoothly move the background radial gradient to follow the mouse
    gsap.to(mouseGlow, {
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
        duration: 0.8,
        ease: "power2.out"
    });
});

// 4. Navbar styling on scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('bg-black/50', 'backdrop-blur-lg');
    } else {
        nav.classList.remove('bg-black/50', 'backdrop-blur-lg');
    }
});

// --- Waitlist Form Logic ---

// Wrap everything in a listener to wait for the HTML to load
document.addEventListener('DOMContentLoaded', () => {
    const waitlistForm = document.getElementById('waitlist-form');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const btnSpinner = document.getElementById('btn-spinner');

    // Only run if the form actually exists on the page
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', () => {
            submitted = true; 
            
            // UI Loading State
            submitBtn.disabled = true;
            if (btnText) btnText.textContent = "Saving...";
            if (btnSpinner) btnSpinner.classList.remove('hidden');
        });
    }
});

// --- Modal Logic ---

function showSuccessModal() {
    const modal = document.getElementById('success-modal');
    modal.classList.remove('hidden');
    
    // Using your existing GSAP for a smooth entrance
    gsap.to(modal, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
    });
    
    gsap.from(modal.querySelector('.glass-panel'), {
        scale: 0.8,
        y: 20,
        duration: 0.5,
        ease: "back.out(1.7)"
    });
}

function hideSuccessModal() {
    const modal = document.getElementById('success-modal');
    
    gsap.to(modal, {
        opacity: 0,
        scale: 0.9,
        duration: 0.3,
        onComplete: () => {
            modal.classList.add('hidden');
        }
    });
}

// Update your handleResponse function
window.handleResponse = function() {
    if (submitted) {
        // 1. Trigger the Modal instead of alert
        showSuccessModal();
        
        // 2. Reset Button & Form
        const waitlistForm = document.getElementById('waitlist-form');
        const submitBtn = document.getElementById('submit-btn');
        const btnText = document.getElementById('btn-text');
        const btnSpinner = document.getElementById('btn-spinner');

        if (submitBtn) {
            submitBtn.disabled = false;
            if (btnText) btnText.textContent = "Secure Spot";
            if (btnSpinner) btnSpinner.classList.add('hidden');
        }
        
        if (waitlistForm) waitlistForm.reset();
        submitted = false;
    }
};

// Add listener for the close button
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', hideSuccessModal);
    }
    
    // Optional: Close modal if clicking on the overlay
    const modalOverlay = document.querySelector('#success-modal .bg-black/60');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', hideSuccessModal);
    }
});