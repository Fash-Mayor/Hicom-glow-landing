import { useEffect } from 'react'

const LANDING_HTML = `
<div class="glow-bg"></div>

<nav class="fixed w-full z-50 transition-all duration-300 py-4" id="navbar">
    <div class="max-w-7xl mx-auto px-6 flex justify-between items-center glass-panel rounded-full py-3">
        <div class="text-2xl font-extrabold tracking-tighter gs-reveal">
            <span class="text-brand">HiCom</span> Glow
        </div>
        <div class="hidden lg:flex gap-8 text-sm font-medium text-gray-600 gs-reveal">
            <a href="#how" class="hover:text-brand transition">How it works</a>
            <a href="#providers" class="hover:text-brand transition">Providers</a>
            <a href="#customers" class="hover:text-brand transition">Customers</a>
            <a href="#security" class="hover:text-brand transition">Security</a>
        </div>
        <a href="index.html" class="bg-black text-white px-6 py-2.5 rounded-full font-medium btn-hover gs-reveal">
            Join Waitlist
        </a>
    </div>
</nav>

<main class="relative min-h-screen pt-24 pb-12 overflow-hidden px-6">
    <div class="absolute inset-0 pointer-events-none">
        <div class="glow-grid"></div>
    </div>

    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
        <div class="text-left">
            <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-brand/20 bg-brand/5 text-brand font-semibold text-sm gs-hero">
                <span class="text-lg">✨</span>
                The premium way to book beauty, by design
            </div>

            <h1 class="mt-6 text-5xl md:text-7xl font-extrabold leading-tight text-gray-900 gs-hero">
                Discover perfection
                <span class="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">Elevate your craft.</span>
            </h1>

            <p class="mt-5 text-lg md:text-xl text-gray-600 max-w-xl gs-hero leading-relaxed">
                We bridge top-tier beauty service providers with high-value clients. Discover verified talent, book instantly, and manage every moment with secure payments and zero stress.
            </p>

            <div class="mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center gs-hero">
                <a href="#customers" class="btn-hover bg-brand text-white px-8 py-4 rounded-full font-bold text-lg text-center">
                    I am a client
                </a>
                <a href="#providers" class="btn-hover bg-white text-gray-900 border border-gray-200 shadow-sm px-8 py-4 rounded-full font-bold text-lg text-center">
                    I am a provider
                </a>
                <a href="index.html" class="btn-hover bg-black text-white px-8 py-4 rounded-full font-bold text-lg text-center">
                    Join Waitlist
                </a>
            </div>

            <div class="mt-8 grid sm:grid-cols-3 gap-4">
                <div class="section-pill glass-panel py-4 px-4 rounded-2xl gs-fade-up">
                    <div class="text-2xl font-extrabold text-brand">24/7</div>
                    <div class="text-sm font-medium text-gray-700 mt-1">Instant booking</div>
                </div>
                <div class="section-pill glass-panel py-4 px-4 rounded-2xl gs-fade-up" style="transition-delay: 80ms;">
                    <div class="text-2xl font-extrabold text-brand">Secure</div>
                    <div class="text-sm font-medium text-gray-700 mt-1">Payments & refunds</div>
                </div>
                <div class="section-pill glass-panel py-4 px-4 rounded-2xl gs-fade-up" style="transition-delay: 160ms;">
                    <div class="text-2xl font-extrabold text-brand">Verified</div>
                    <div class="text-sm font-medium text-gray-700 mt-1">Provider quality</div>
                </div>
            </div>
        </div>

        <div class="relative gs-hero-image hidden lg:block">
            <div class="photo-frame photo-a float-slow">
                <img
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
                    alt="Editorial portrait"
                    loading="lazy"
                />
            </div>

            <div class="photo-frame photo-b float-fast">
                <img
                    src="https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=900&q=80"
                    alt="Beauty appointment lifestyle"
                    loading="lazy"
                />
            </div>

            <div class="photo-frame photo-c">
                <div class="p-5">
                    <div class="flex items-center justify-between">
                        <div class="text-sm font-semibold text-gray-900">Today’s glow</div>
                        <div class="badge-gold">Premium</div>
                    </div>
                    <div class="mt-3 grid grid-cols-2 gap-3">
                        <div class="mini-card">
                            <div class="mini-dot bg-brand"></div>
                            <div class="mini-label">Bookings</div>
                            <div class="mini-value">3x faster</div>
                        </div>
                        <div class="mini-card">
                            <div class="mini-dot bg-brand"></div>
                            <div class="mini-label">Quality</div>
                            <div class="mini-value">Verified</div>
                        </div>
                        <div class="mini-card">
                            <div class="mini-dot bg-brand"></div>
                            <div class="mini-label">Security</div>
                            <div class="mini-value">Protected</div>
                        </div>
                        <div class="mini-card">
                            <div class="mini-dot bg-brand"></div>
                            <div class="mini-label">Scheduling</div>
                            <div class="mini-value">Flexible</div>
                        </div>
                    </div>
                    <div class="mt-4 text-xs text-gray-600 leading-relaxed">
                        From request to completed service - everything is handled in one beautiful flow.
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-10 lg:hidden gs-fade-up">
            <div class="grid grid-cols-2 gap-4">
                <div class="photo-frame aspect-square">
                    <img
                        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
                        alt="Editorial portrait"
                        loading="lazy"
                    />
                </div>
                <div class="photo-frame aspect-square">
                    <img
                        src="https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=800&q=80"
                        alt="Beauty appointment lifestyle"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    </div>
</main>

<section id="how" class="py-20 relative">
    <div class="max-w-7xl mx-auto px-6">
        <div class="text-center">
            <div class="inline-block px-5 py-2 rounded-full border border-brand/20 bg-brand/5 text-brand font-semibold text-sm gs-fade-up">
                Glow, end to end
            </div>
            <h2 class="mt-6 text-4xl md:text-5xl font-extrabold text-gray-900 gs-fade-up">A platform built for both sides</h2>
            <p class="mt-4 text-gray-600 max-w-2xl mx-auto gs-fade-up leading-relaxed">
                Providers onboard, post services, and manage bookings. Customers create an account, book the perfect provider, and handle changes with confidence.
            </p>
        </div>

        <div class="mt-12 grid md:grid-cols-3 gap-8">
            <div class="glass-panel rounded-3xl p-7 gs-fade-up">
                <div class="badge-gold-soft">01</div>
                <h3 class="mt-4 text-2xl font-bold text-gray-900">Providers onboard</h3>
                <p class="mt-3 text-gray-600 leading-relaxed">
                    Create your profile, define your services, and share your signature style. We make it effortless to be discoverable.
                </p>
            </div>
            <div class="glass-panel rounded-3xl p-7 gs-fade-up" style="transition-delay: 80ms;">
                <div class="badge-gold-soft">02</div>
                <h3 class="mt-4 text-2xl font-bold text-gray-900">Customers book & pay securely</h3>
                <p class="mt-3 text-gray-600 leading-relaxed">
                    Search, choose a provider, and book in minutes. Payments are secure, so you and your client can relax.
                </p>
            </div>
            <div class="glass-panel rounded-3xl p-7 gs-fade-up" style="transition-delay: 160ms;">
                <div class="badge-gold-soft">03</div>
                <h3 class="mt-4 text-2xl font-bold text-gray-900">Services complete smoothly</h3>
                <p class="mt-3 text-gray-600 leading-relaxed">
                    Manage cancellations, reschedules, and completion statuses. Everything stays clear and transparent.
                </p>
            </div>
        </div>
    </div>
</section>

<section id="providers" class="py-20 bg-white/60 relative rounded-3xl mx-6 lg:mx-12">
    <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-14 items-center">
            <div class="gs-fade-up">
                <div class="badge-gold-soft inline-flex items-center">Providers</div>
                <h2 class="mt-5 text-4xl md:text-5xl font-extrabold text-gray-900">Turn your craft into booked-out schedules</h2>
                <p class="mt-4 text-gray-600 text-lg leading-relaxed">
                    Accept bookings you want, decline what does not fit, and keep your service timeline perfectly organized.
                </p>

                <div class="mt-8 space-y-4">
                    <div class="provider-row">
                        <div class="provider-check">✓</div>
                        <div>
                            <div class="font-semibold text-gray-900">Create a service</div>
                            <div class="text-gray-600 text-sm">Set pricing, timing, and your signature offering</div>
                        </div>
                    </div>
                    <div class="provider-row">
                        <div class="provider-check">✓</div>
                        <div>
                            <div class="font-semibold text-gray-900">Accept or decline bookings</div>
                            <div class="text-gray-600 text-sm">Control your schedule without the back-and-forth</div>
                        </div>
                    </div>
                    <div class="provider-row">
                        <div class="provider-check">✓</div>
                        <div>
                            <div class="font-semibold text-gray-900">Mark completed services</div>
                            <div class="text-gray-600 text-sm">Keep customers informed and delighted</div>
                        </div>
                    </div>
                </div>

                <a href="index.html" class="mt-10 inline-flex btn-hover bg-brand text-white px-10 py-4 rounded-full font-bold text-lg">
                    Provider onboarding - join waitlist
                </a>
            </div>

            <div class="gs-fade-up">
                <div class="photo-frame overflow-hidden rounded-3xl aspect-[3/4]">
                    <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80"
                        alt="Provider working on beauty look"
                        loading="lazy"
                    />
                </div>
                <div class="mt-6 glass-panel rounded-3xl p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="text-gray-700 text-sm font-semibold">Your dashboard</div>
                            <div class="text-gray-900 text-2xl font-extrabold">Simple. Powerful. Glowing.</div>
                        </div>
                        <div class="badge-gold">2023+</div>
                    </div>
                    <div class="mt-5 grid grid-cols-3 gap-3">
                        <div class="dash-chip">New services</div>
                        <div class="dash-chip">Requests</div>
                        <div class="dash-chip">Completion</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="customers" class="py-20 relative">
    <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-14 items-center">
            <div class="photo-frame overflow-hidden rounded-3xl aspect-[3/4] gs-fade-up">
                <img
                    src="https://images.unsplash.com/photo-1520975958225-59e7c6a3d0d0?auto=format&fit=crop&w=1200&q=80"
                    alt="Customer booking a beauty service"
                    loading="lazy"
                />
            </div>
            <div class="gs-fade-up">
                <div class="badge-gold-soft inline-flex items-center">Customers</div>
                <h2 class="mt-5 text-4xl md:text-5xl font-extrabold text-gray-900">Book, manage, and stay in your glow</h2>
                <p class="mt-4 text-gray-600 text-lg leading-relaxed">
                    Customers create an account, book a service with any provider, and handle booking changes in a few taps.
                </p>

                <div class="mt-8 space-y-4">
                    <div class="provider-row">
                        <div class="provider-check">✓</div>
                        <div>
                            <div class="font-semibold text-gray-900">Book a service</div>
                            <div class="text-gray-600 text-sm">Choose the provider you trust and confirm quickly</div>
                        </div>
                    </div>
                    <div class="provider-row">
                        <div class="provider-check">✓</div>
                        <div>
                            <div class="font-semibold text-gray-900">Reschedule & cancel</div>
                            <div class="text-gray-600 text-sm">Flexible actions when your plans change</div>
                        </div>
                    </div>
                    <div class="provider-row">
                        <div class="provider-check">✓</div>
                        <div>
                            <div class="font-semibold text-gray-900">Secure payments</div>
                            <div class="text-gray-600 text-sm">No surprises. Nothing to worry about</div>
                        </div>
                    </div>
                </div>

                <div class="mt-10 flex flex-col sm:flex-row gap-4">
                    <a href="index.html" class="btn-hover bg-black text-white px-10 py-4 rounded-full font-bold text-lg inline-flex justify-center">
                        Get early access
                    </a>
                    <a href="#security" class="btn-hover bg-white text-gray-900 border border-gray-200 px-10 py-4 rounded-full font-bold text-lg inline-flex justify-center">
                        See security
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="security" class="py-20 bg-white/60 relative">
    <div class="max-w-7xl mx-auto px-6">
        <div class="text-center gs-fade-up">
            <div class="badge-gold-soft inline-flex items-center">Security</div>
            <h2 class="mt-5 text-4xl md:text-5xl font-extrabold text-gray-900">Payments are protected. Booking stays calm.</h2>
            <p class="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
                We built HiCom Glow to remove worry from every booking - secure payments, clear status updates, and transparent actions.
            </p>
        </div>

        <div class="mt-12 grid md:grid-cols-3 gap-8">
            <div class="glass-panel rounded-3xl p-7 gs-fade-up">
                <div class="security-icon">🛡️</div>
                <h3 class="mt-4 text-2xl font-bold text-gray-900">Secure and encrypted</h3>
                <p class="mt-3 text-gray-600 leading-relaxed">
                    Payments are processed safely with protection layers designed for modern apps.
                </p>
            </div>
            <div class="glass-panel rounded-3xl p-7 gs-fade-up" style="transition-delay: 90ms;">
                <div class="security-icon">🔒</div>
                <h3 class="mt-4 text-2xl font-bold text-gray-900">Clear booking lifecycle</h3>
                <p class="mt-3 text-gray-600 leading-relaxed">
                    From accept/decline to completed status, you always know where your booking stands.
                </p>
            </div>
            <div class="glass-panel rounded-3xl p-7 gs-fade-up" style="transition-delay: 180ms;">
                <div class="security-icon">✨</div>
                <h3 class="mt-4 text-2xl font-bold text-gray-900">Fraud-resistant flow</h3>
                <p class="mt-3 text-gray-600 leading-relaxed">
                    Designed to protect both sides with thoughtful validation and safeguards.
                </p>
            </div>
        </div>

        <div class="mt-12 text-center gs-fade-up">
            <div class="inline-flex items-center gap-3 px-6 py-4 rounded-2xl glass-panel">
                <div class="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand font-extrabold">G</div>
                <div class="text-left">
                    <div class="font-semibold text-gray-900">Ready to glow on day one?</div>
                    <div class="text-sm text-gray-600">Join the waitlist for providers and customers.</div>
                </div>
                <a href="index.html" class="btn-hover bg-brand text-white px-8 py-3 rounded-full font-bold inline-flex justify-center">
                    Join now
                </a>
            </div>
        </div>
    </div>
</section>

<section id="testimonials" class="py-20 relative">
    <div class="max-w-7xl mx-auto px-6">
        <div class="text-center gs-fade-up">
            <div class="inline-block px-5 py-2 rounded-full border border-brand/20 bg-brand/5 text-brand font-semibold text-sm">Testimonials</div>
            <h2 class="mt-6 text-4xl md:text-5xl font-extrabold text-gray-900">Editorial glow from real people</h2>
            <p class="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
                The best bookings feel effortless - like a luxury experience, not a stressful task.
            </p>
        </div>

        <div class="mt-12 grid md:grid-cols-3 gap-8">
            <div class="glass-panel rounded-3xl p-7 gs-fade-up">
                <div class="quote-mark">“</div>
                <p class="text-gray-700 leading-relaxed text-lg">
                    Booking on HiCom Glow feels premium. I chose a provider I trust and everything just worked.
                </p>
                <div class="mt-5 flex items-center gap-3">
                    <div class="avatar">
                        <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80" alt="Client portrait" loading="lazy" />
                    </div>
                    <div>
                        <div class="font-semibold text-gray-900">Amina</div>
                        <div class="text-sm text-gray-600">Customer</div>
                    </div>
                </div>
            </div>

            <div class="glass-panel rounded-3xl p-7 gs-fade-up" style="transition-delay: 90ms;">
                <div class="quote-mark">“</div>
                <p class="text-gray-700 leading-relaxed text-lg">
                    Providers finally get control of scheduling. Accept, decline, complete - it stays organized.
                </p>
                <div class="mt-5 flex items-center gap-3">
                    <div class="avatar">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" alt="Provider portrait" loading="lazy" />
                    </div>
                    <div>
                        <div class="font-semibold text-gray-900">Chiamaka</div>
                        <div class="text-sm text-gray-600">Provider</div>
                    </div>
                </div>
            </div>

            <div class="glass-panel rounded-3xl p-7 gs-fade-up" style="transition-delay: 180ms;">
                <div class="quote-mark">“</div>
                <p class="text-gray-700 leading-relaxed text-lg">
                    The secure payments are reassuring. I can reschedule without the stress of chasing updates.
                </p>
                <div class="mt-5 flex items-center gap-3">
                    <div class="avatar">
                        <img src="https://images.unsplash.com/photo-1520975958225-59e7c6a3d0d0?auto=format&fit=crop&w=200&q=80" alt="Client portrait" loading="lazy" />
                    </div>
                    <div>
                        <div class="font-semibold text-gray-900">Sade</div>
                        <div class="text-sm text-gray-600">Customer</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<footer class="py-10 text-center text-gray-500 text-sm border-t border-gray-200 bg-white/40">
    <p>&copy; 2026 HiCom Glow. Built for the next era of beauty booking.</p>
</footer>
`

export default function App() {
  useEffect(() => {
    const w = window as any
    const gsap = w.gsap as any
    const ScrollTrigger = w.ScrollTrigger as any
    if (!gsap || !ScrollTrigger) return

    gsap.registerPlugin(ScrollTrigger)

    // Initial Load
    const tl = gsap.timeline()
    tl.from('.gs-reveal', { y: -20, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' })
      .from('.gs-hero', { y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: 'power4.out' }, '-=0.5')
      .from('.gs-hero-image > div', { y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: 'back.out(1.2)' }, '-=0.8')

    // Scroll Animations
    gsap.utils.toArray('.gs-fade-up').forEach((element: Element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
    })

    // Navbar blur on scroll
    const onScroll = () => {
      const nav = document.getElementById('navbar')
      if (!nav) return
      const navInner = nav.firstElementChild as HTMLElement | null
      if (!navInner) return

      if (window.scrollY > 50) {
        navInner.classList.add('bg-white/80', 'shadow-sm')
        navInner.classList.remove('glass-panel')
      } else {
        navInner.classList.remove('bg-white/80', 'shadow-sm')
        navInner.classList.add('glass-panel')
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return <div dangerouslySetInnerHTML={{ __html: LANDING_HTML }} />
}

