import { useRef, useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js';
import favicon from "./assets/favicon.png";
import cushmpg from "./assets/customer-home-page.png";
import brb from "./assets/barber_barbing_iii.jpg";
import queenhair from "./assets/queen-hair.jpg";
import blackbo from "./assets/black_beauty_orange.jpg";
import massage from "./assets/massage.jpg";
import coolshop from "./assets/cool_shop.jpg";

// Initialize Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const Landing = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  // --- 1. STATE FOR FORM & MODALS ---
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");

  // --- 2. FORM SUBMISSION ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("waitlist").insert([
        {
          email: email.toLowerCase().trim(),
          user_type: userType,
        },
      ]);

      if (error) {
        if (error.code === "23505") { // Unique constraint (already registered)
          setShowError(true);
        } else {
          throw error;
        }
      } else {
        setShowSuccess(true);
        setEmail("");
        setUserType("");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- 3. ANIMATIONS ---
  useEffect(() => {
    const w = window as any;
    const gsap = w.gsap as any;
    const ScrollTrigger = w.ScrollTrigger as any;
    if (!gsap || !ScrollTrigger || !mainRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      // Hero Animations
      const tl = gsap.timeline();
      tl.from(".gs-reveal", { y: -20, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" })
        .from(".gs-hero", { y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power4.out" }, "-=0.5")
        .from(".gs-hero-image > div", { y: 50, opacity: 0, duration: 0.8, stagger: 0.2, ease: "back.out(1.2)" }, "-=0.8");

      // Scroll Fade-ups
      gsap.utils.toArray(".gs-fade-up").forEach((element: any) => {
        gsap.from(element, {
          scrollTrigger: { trigger: element, start: "top 85%", toggleActions: "play none none reverse" },
          y: 40, opacity: 0, duration: 1, ease: "power3.out",
        });
      });
    }, mainRef);

    // Navbar logic
    const onScroll = () => {
      const nav = document.getElementById("navbar");
      const navInner = nav?.firstElementChild as HTMLElement | null;
      if (!navInner) return;
      if (window.scrollY > 50) {
        navInner.classList.add("bg-white/80", "shadow-sm", "backdrop-blur-md");
        navInner.classList.remove("glass-panel");
      } else {
        navInner.classList.remove("bg-white/80", "shadow-sm", "backdrop-blur-md");
        navInner.classList.add("glass-panel");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      ctx.revert();
    };
  }, []);

  // Modal Pop Animation Trigger
  useEffect(() => {
    const w = window as any;
    const gsap = w.gsap as any;
    if (!gsap) return;

    if (showSuccess || showError) {
      const panel = showSuccess ? ".success-panel" : ".error-panel";
      gsap.fromTo(panel, 
        { scale: 0.8, y: 30, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
    }
  }, [showSuccess, showError]);

  return (
    <div ref={mainRef}>
      <div className="glow-bg"></div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 py-4" id="navbar">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center glass-panel rounded-full py-3">
          <div className="text-2xl font-extrabold tracking-tighter gs-reveal">
            <span className="hicom pr-1 text-gray-900">HiCom</span>
            <span className="glow">Glow</span>
          </div>
          <div className="hidden lg:flex gap-8 text-sm font-medium text-gray-600 gs-reveal">
            <a href="#how" className="hover:text-brand transition">How it works</a>
            <a href="#providers" className="hover:text-brand transition">Service Providers</a>
            <a href="#customers" className="hover:text-brand transition">Customers</a>
            <a href="#security" className="hover:text-brand transition">Security</a>
          </div>
          <a href="#waitlist" className="bg-brand text-white px-6 py-2.5 rounded-full font-medium gs-reveal">Join Waitlist</a>
        </div>
      </nav>

      <main className="relative min-h-screen pt-24 pb-12 overflow-hidden px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="glow-grid"></div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <div className="text-left">
            <div className="inline-flex items-center gap-1 px-3 py-2 rounded-full border border-brand/20 bg-brand/5 text-brand font-semibold text-sm gs-hero">
              <span className="text-lg">✨</span>
              The premium way to book beauty, by design
            </div>

            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight text-gray-900 gs-hero">
              Discover perfection
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">
                Elevate your craft.
              </span>
            </h1>

            <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-xl gs-hero leading-relaxed">
              We bridge top-tier beauty service providers with high-value
              clients. Discover verified talent, book instantly, and manage
              every moment with secure payments and zero stress.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center gs-hero">
              <a
                href="#customers"
                className="btn-hover bg-brand text-white px-8 py-4 rounded-full font-bold text-lg text-center"
              >
                I am a Customer
              </a>
              <a
                href="#providers"
                className="btn-hover bg-white text-gray-900 border border-gray-200 shadow-sm px-8 py-4 rounded-full font-bold text-lg text-center"
              >
                I am a Service Provider
              </a>
              <a
                href="#waitlist"
                className="btn-hover bg-black text-white px-8 py-4 rounded-full font-bold text-lg text-center"
              >
                Join Waitlist
              </a>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="section-pill glass-panel py-4 px-4 rounded-2xl gs-fade-up">
                <div className="text-2xl font-extrabold text-brand">
                  0 delay
                </div>
                <div className="text-sm font-medium text-gray-700 mt-1">
                  Instant booking
                </div>
              </div>
              <div className="section-pill glass-panel py-4 px-4 rounded-2xl gs-fade-up">
                <div className="text-2xl font-extrabold text-brand">Secure</div>
                <div className="text-sm font-medium text-gray-700 mt-1">
                  Payments & refunds
                </div>
              </div>
              <div className="section-pill glass-panel py-4 px-4 rounded-2xl gs-fade-up">
                <div className="text-2xl font-extrabold text-brand">
                  Verified
                </div>
                <div className="text-sm font-medium text-gray-700 mt-1">
                  Service Provider quality
                </div>
              </div>
            </div>
          </div>

          <div className="relative gs-hero-image hidden lg:block">
            <div className="photo-frame photo-a float-slow">
              <img
                src={cushmpg}
                alt="customer-home-page"
                style={{ height: "600px" }}
              />
            </div>

            <div className="photo-frame photo-b float-fast">
              <img src={brb} alt="cool barber working on a client" />
            </div>

            <div className="photo-frame photo-c float-fast">
              <div className="gs-fade-up">
                <img
                  src={queenhair}
                  alt="washing-hair"
                  className="w-auto object-contain"
                  style={{ height: "300px" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View Images */}
        <div className="mt-3 lg:hidden gs-fade-up">
          <div className="grid grid-cols-2 gap-4">
            <div className="photo-frame aspect-square">
              <img src={massage} alt="massage service" />
            </div>
            <div className="photo-frame aspect-square">
              <img src={brb} alt="barber service" />
            </div>
          </div>
        </div>
      </main>

      {/* How It Works Section */}
      <section id="how" className="md:py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-block px-5 py-2 rounded-full border border-brand/20 bg-brand/5 text-brand font-semibold text-sm gs-fade-up">
              Glow, end to end
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-gray-900 gs-fade-up">
              A platform built for both sides
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto gs-fade-up leading-relaxed">
              Service Providers onboard, post services, and manage bookings. Customers
              create an account, book the perfect service provider, and handle changes
              with confidence.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="glass-panel rounded-3xl p-7 gs-fade-up">
              <div className="badge-gold-soft">01</div>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                Service Providers onboard
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Create your profile, define your services, and share your
                signature style. We make it effortless to be discoverable.
              </p>
            </div>
            <div className="glass-panel rounded-3xl p-7 gs-fade-up">
              <div className="badge-gold-soft">02</div>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                Customers book & pay securely
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Search, choose a service provider, and book in seconds. Payments are
                secure, so you and your client can relax.
              </p>
            </div>
            <div className="glass-panel rounded-3xl p-7 gs-fade-up">
              <div className="badge-gold-soft">03</div>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                Services complete smoothly
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Manage cancellations, reschedules, and completion statuses.
                Everything stays clear and transparent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Providers Section */}
      <section id="providers" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 md:gap-14 items-center">
            <div className="photo-frame overflow-hidden rounded-3xl aspect-[3/4]">
              <img src={coolshop} alt="Provider working on beauty look" />
            </div>
            <div className="gs-fade-up">
              <div className="badge-gold-soft inline-flex items-center mt-3">
                Service Providers
              </div>
              <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-gray-900">
                Turn your craft into booked-out schedules
              </h2>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                Accept bookings you want, decline what does not fit, and keep
                your service timeline perfectly organized.
              </p>

              <div className="mt-8 space-y-4">
                <div className="provider-row">
                  <div className="provider-check">✓</div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Create a service
                    </div>
                    <div className="text-gray-600 text-sm">
                      Set pricing, timing, and your signature offering
                    </div>
                  </div>
                </div>
                <div className="provider-row">
                  <div className="provider-check">✓</div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Accept or decline bookings
                    </div>
                    <div className="text-gray-600 text-sm">
                      Control your schedule without the back-and-forth
                    </div>
                  </div>
                </div>
                <div className="provider-row">
                  <div className="provider-check">✓</div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Mark completed services
                    </div>
                    <div className="text-gray-600 text-sm">
                      Keep customers informed and delighted
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#waitlist"
                className="mt-10 inline-flex btn-hover bg-brand text-white px-10 py-4 rounded-full font-bold text-lg"
              >
                Be part of the first 100
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <section id="customers" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 md:gap-14 items-center">
            <div className="photo-frame overflow-hidden rounded-3xl aspect-[3/4] gs-fade-up lg:order-last">
              <img src={blackbo} alt="Customer booking a beauty service" />
            </div>
            <div className="gs-fade-up">
              <div className="badge-gold-soft inline-flex items-center mt-3">
                Customers
              </div>
              <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-gray-900">
                Book, manage, and stay in your glow
              </h2>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                Customers create an account, handle booking in a few taps, and
                book a service with any service provider.
              </p>

              <div className="mt-8 space-y-4">
                <div className="provider-row">
                  <div className="provider-check">✓</div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Book a service
                    </div>
                    <div className="text-gray-600 text-sm">
                      Choose the service provider you trust and confirm quickly
                    </div>
                  </div>
                </div>
                <div className="provider-row">
                  <div className="provider-check">✓</div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Reschedule & cancel
                    </div>
                    <div className="text-gray-600 text-sm">
                      Flexible actions when your plans change
                    </div>
                  </div>
                </div>
                <div className="provider-row">
                  <div className="provider-check">✓</div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Secure payments
                    </div>
                    <div className="text-gray-600 text-sm">
                      No surprises. Nothing to worry about
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#waitlist"
                  className="btn-hover bg-brand text-white px-10 py-4 rounded-full font-bold text-lg inline-flex justify-center"
                >
                  Be part of the first 100
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 bg-white/60 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center gs-fade-up">
            <div className="badge-gold-soft inline-flex items-center">
              Security
            </div>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-gray-900">
              Payments protected. Booking stays calm.
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
              We built HiCom Glow to remove worry from every booking - secure
              payments, clear status updates, and transparent actions.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="glass-panel rounded-3xl p-7 gs-fade-up">
              <div className="security-icon">🛡️</div>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                Secure and encrypted
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Payments are processed safely with protection layers powered by
                Paystack.
              </p>
            </div>
            <div className="glass-panel rounded-3xl p-7 gs-fade-up">
              <div className="security-icon">🔒</div>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                Clear booking lifecycle
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                From accept/decline to completed status, you always know where
                your booking stands.
              </p>
            </div>
            <div className="glass-panel rounded-3xl p-7 gs-fade-up">
              <div className="security-icon">✨</div>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                Fraud-resistant flow
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Designed to protect both sides with thoughtful validation and
                safeguards.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center gs-fade-up">
            <div className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl glass-panel">
              <div className="w-15 h-15 flex items-center justify-center">
                <img src={favicon} alt="logo" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">
                  Ready to glow on day one?
                </div>
                <div className="text-sm text-gray-600">
                  Join the waitlist for service providers and customers.
                </div>
              </div>
              <a
                href="#waitlist"
                className="btn-hover bg-brand text-white px-8 py-3 rounded-full font-bold inline-flex justify-center ml-4"
              >
                Join now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 relative z-10">
        <div className="max-w-3xl mx-auto px-2 text-center">
          <div className="glass-panel rounded-3xl p-10 md:p-12 relative overflow-hidden gs-fade-up">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h2 className="text-4xl font-bold mb-4 relative z-10 text-gray-900">Join the Founding Family</h2>
            <p className="text-gray-700 mb-8 relative z-10">The first 100 users get a 'Founding Member' badge and 0% service fees for the first 2 months.<br/> (50 customers and 50 service proviers)</p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 relative z-10">
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="bg-brand border border-brand rounded-2xl px-6 py-4 text-white focus:outline-none appearance-none"
                required
              >
                <option value="" disabled>I am a...</option>
                <option value="customer" className="text-gray-900">Customer</option>
                <option value="provider" className="text-gray-900">Service Provider</option>
              </select>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 border rounded-xl px-6 py-4 text-black focus:outline-none focus:border-brand transition-colors"
                required
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-brand text-white font-bold px-6 py-4 rounded-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 min-w-[160px] disabled:opacity-70"
              >
                <span>{isSubmitting ? "Saving..." : "Secure Spot"}</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 text-sm border-t border-gray-200 bg-white/40">
        <p>&copy; 2026 HiCom Glow. Built for the next era of beauty booking.</p>
      </footer>

      {/* --- SUCCESS MODAL --- */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowSuccess(false)}></div>
          <div className="success-panel glass-panel relative max-w-sm w-full p-8 rounded-3xl text-center border border-white/10 shadow-2xl bg-white">
            <div className="w-16 h-16 bg-brand/20 border border-brand rounded-full flex items-center justify-center mx-auto mb-6">
              <img src={favicon} alt="logo" className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Saved!</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">Waitlist joined successfully. We've sent you a welcome mail with details on what's next. Go check it out.</p>
            <button onClick={() => setShowSuccess(false)} className="w-full bg-brand text-white font-bold py-4 rounded-xl hover:bg-opacity-90">
              Great, thanks!
            </button>
          </div>
        </div>
      )}

      {/* --- ERROR MODAL --- */}
      {showError && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowError(false)}></div>
          <div className="error-panel glass-panel relative max-w-sm w-full p-8 rounded-3xl text-center border border-white/10 shadow-2xl bg-white">
            <div className="w-16 h-16 bg-red-500/20 border border-red-500/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">👋</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Already Glowing!</h3>
            <p className="text-gray-600 mb-8">It looks like this email is already on our waitlist. We’ve saved your spot! Check your inbox for a welcome mail with details on what's next.</p>
            <button onClick={() => setShowError(false)} className="w-full bg-brand text-white font-bold py-4 rounded-xl">
              Got it, thanks!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;