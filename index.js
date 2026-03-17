// --- Initializations ---
gsap.registerPlugin(ScrollTrigger);

const supabaseUrl = 'https://jzvyllilhegnujqrjiyi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6dnlsbGlsaGVnbnVqcXJqaXlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg2NzQxOTksImV4cCI6MjA4NDI1MDE5OX0.oljxYJ2GFbifb1q0FvAEfa2eLdQkvAB4lXfq2LR4QQ8';
const _supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// --- Selectors ---
const waitlistForm = document.getElementById('waitlist-form');
const submitBtn = document.getElementById('submit-btn');
const btnText = document.getElementById('btn-text');
const btnSpinner = document.getElementById('btn-spinner');

// --- Reusable Modal Functions ---
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const panel = modal.querySelector('.glass-panel');

    modal.classList.remove('hidden');

    // Fade in overlay
    gsap.to(modal, { opacity: 1, duration: 0.4, ease: "power2.out" });

    // Scale and Fade in panel
    gsap.fromTo(panel,
        { scale: 0.8, y: 30, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
    );
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);

    gsap.to(modal, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
            modal.classList.add('hidden');
        }
    });
}

// --- Event Listeners ---
document.getElementById('close-modal').addEventListener('click', () => closeModal('success-modal'));
document.getElementById('close-error-modal').addEventListener('click', () => closeModal('error-modal'));

// Close on background click
document.querySelectorAll('[id$="-modal"]').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('absolute')) {
            closeModal(modal.id);
        }
    });
});

// --- Smooth scroll to waitlist ---
const waitlistLinks = document.querySelectorAll('a[href="#waitlist"]');
waitlistLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector('#waitlist');
        const headerOffset = 120;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;
        gsap.to(window, { duration: 0.2, scrollTo: targetPosition, ease: "power2.inOut" });
    });
});

// --- Form Handling ---
waitlistForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Start Loading State
    submitBtn.disabled = true;
    btnText.textContent = "Saving...";
    btnSpinner.classList.remove('hidden');

    const email = document.getElementById('user-email').value;
    const userType = document.getElementById('user-type').value;

    try {
        const { error } = await _supabase
            .from('waitlist')
            .insert([{
                email: email.toLowerCase().trim(),
                user_type: userType
            }]);

        if (error) {
            if (error.code === '23505') {
                openModal('error-modal');
                return;
            }
            throw error;
        }

        openModal('success-modal');
        waitlistForm.reset();

    } catch (error) {
        console.error("Submission error:", error);
        alert("Something went wrong. Please check your connection.");
    } finally {
        // Reset Button State
        submitBtn.disabled = false;
        btnText.textContent = "Secure Spot";
        btnSpinner.classList.add('hidden');
    }
});

// --- Aesthetic Animations (Timeline) ---
const tl = gsap.timeline();
tl.from(".gs-reveal", { y: -20, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" })
    .from(".gs-hero", { y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: "power4.out" }, "-=0.5");

// Mouse Glow
const mouseGlow = document.getElementById('mouseGlow');
document.addEventListener('mousemove', (e) => {
    gsap.to(mouseGlow, {
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
        duration: 0.8,
        ease: "power2.out"
    });
});