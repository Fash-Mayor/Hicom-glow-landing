import { useEffect } from 'react'

const LANDING_HTML = `
<div class="glow-bg"></div>

<nav class="fixed w-full z-50 transition-all duration-300 py-4" id="navbar">
    <div class="max-w-7xl mx-auto px-6 flex justify-between items-center glass-panel rounded-full py-3">
        <div class="text-2xl font-extrabold tracking-tighter gs-reveal">
            <span class="text-brand">HiCom</span> Glow
        </div>
        <div class="hidden md:flex gap-8 text-sm font-medium text-gray-600 gs-reveal">
            <a href="#about" class="hover:text-brand transition">About</a>
            <a href="#customers" class="hover:text-brand transition">For Customers</a>
            <a href="#providers" class="hover:text-brand transition">For Providers</a>
        </div>
        <a href="index.html" class="bg-black text-white px-6 py-2.5 rounded-full font-medium btn-hover gs-reveal">
            Join Waitlist
        </a>
    </div>
</nav>

<main class="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden px-6">
    <div class="max-w-5xl mx-auto text-center z-10 space-y-8 mt-16">
        <div class="inline-block px-5 py-2 rounded-full border border-brand/20 bg-brand/5 text-brand font-semibold text-sm gs-hero">
            ✨ The ultimate beauty & service ecosystem
        </div>

        <h1 class="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900 gs-hero">
            Discover perfection. <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">Elevate your craft.</span>
        </h1>

        <p class="text-xl text-gray-600 max-w-2xl mx-auto gs-hero leading-relaxed">
            Whether you're looking for top-tier beauty professionals or you're a talented provider ready to grow your business, HiCom Glow connects quality with demand.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center gs-hero pt-6">
            <a href="#waitlist" class="btn-hover bg-brand text-white px-8 py-4 rounded-full font-bold text-lg">
                I'm looking for services
            </a>
            <a href="#waitlist" class="btn-hover bg-white text-gray-900 border border-gray-200 shadow-sm px-8 py-4 rounded-full font-bold text-lg">
                I'm a service provider
            </a>
        </div>
    </div>

    <div class="w-full max-w-5xl mx-auto mt-20 relative h-64 gs-hero-image hidden md:block">
        <div class="absolute left-10 top-0 w-72 glass-panel rounded-3xl p-5 float-slow z-20">
            <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                <div>
                    <div class="h-4 w-24 bg-gray-300 rounded-full mb-2"></div>
                    <div class="h-3 w-16 bg-brand/30 rounded-full"></div>
                </div>
            </div>
            <div class="h-10 w-full bg-black text-white rounded-xl flex items-center justify-center text-sm font-medium">Book Appointment</div>
        </div>

        <div class="absolute right-10 top-12 w-80 glass-panel rounded-3xl p-5 float-fast z-10 border-brand/20">
            <div class="flex justify-between items-center mb-6">
                <div class="font-bold text-gray-800">My Services</div>
                <div class="text-xs text-brand bg-brand/10 px-2 py-1 rounded">Active</div>
            </div>
            <div class="flex flex-wrap gap-2">
                <div class="px-3 py-1.5 bg-brand text-white text-xs rounded-full">Bridal Makeup</div>
                <div class="px-3 py-1.5 bg-gray-100 text-gray-600 border text-xs rounded-full">Gele Tying</div>
                <div class="px-3 py-1.5 bg-gray-100 text-gray-600 border text-xs rounded-full">Pedicure</div>
            </div>
        </div>
    </div>
</main>

<section id="about" class="py-24 bg-white relative">
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div class="space-y-6 gs-fade-up">
            <h2 class="text-4xl font-bold text-gray-900">What is HiCom Glow?</h2>
            <p class="text-lg text-gray-600 leading-relaxed">
                HiCom Glow is a curated digital marketplace designed specifically for the modern service industry. We remove the friction between talented professionals and the clients who need them.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed">
                No more scrolling through unverified social media pages. No more struggling to manage bookings via direct messages. Just a seamless, beautiful platform where services shine and booking is instant.
            </p>
        </div>
        <div class="grid grid-cols-2 gap-4 gs-fade-up">
            <div class="glass-panel p-8 rounded-3xl bg-brand/5 border-none">
                <h3 class="text-4xl font-extrabold text-brand mb-2">100%</h3>
                <p class="text-gray-600 font-medium">Verified Professionals</p>
            </div>
            <div class="glass-panel p-8 rounded-3xl bg-gray-50 border-none mt-8">
                <h3 class="text-4xl font-extrabold text-gray-900 mb-2">Zero</h3>
                <p class="text-gray-600 font-medium">Booking Friction</p>
            </div>
        </div>
    </div>
</section>

<section class="py-24 relative">
    <div class="max-w-7xl mx-auto px-6">

        <div id="customers" class="mb-32">
            <div class="text-center mb-16 gs-fade-up">
                <span class="text-brand font-bold tracking-wider uppercase text-sm">For Clients</span>
                <h2 class="text-4xl font-bold mt-2">Find Exactly What You Need</h2>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="glass-panel p-8 rounded-3xl gs-fade-up">
                    <div class="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl mb-6">🔍</div>
                    <h3 class="text-xl font-bold mb-3">Smart Discovery</h3>
                    <p class="text-gray-600">Filter providers by precise service tags. Looking for exactly "Loc Retwist" or "Soft Glam"? Find it instantly.</p>
                </div>
                <div class="glass-panel p-8 rounded-3xl gs-fade-up" style="transition-delay: 100ms;">
                    <div class="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl mb-6">⭐</div>
                    <h3 class="text-xl font-bold mb-3">Verified Quality</h3>
                    <p class="text-gray-600">Every provider on HiCom Glow maintains a professional profile. Book with confidence every single time.</p>
                </div>
                <div class="glass-panel p-8 rounded-3xl gs-fade-up" style="transition-delay: 200ms;">
                    <div class="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl mb-6">📅</div>
                    <h3 class="text-xl font-bold mb-3">Seamless Booking</h3>
                    <p class="text-gray-600">View real-time availability and secure your appointment in just a few taps. No endless back-and-forth.</p>
                </div>
            </div>
        </div>

        <div id="providers">
            <div class="text-center mb-16 gs-fade-up">
                <span class="text-brand font-bold tracking-wider uppercase text-sm">For Providers</span>
                <h2 class="text-4xl font-bold mt-2">Manage & Grow Your Business</h2>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="glass-panel p-8 rounded-3xl border-brand/20 bg-brand/5 gs-fade-up">
                    <div class="w-12 h-12 bg-brand text-white rounded-2xl shadow-sm flex items-center justify-center text-2xl mb-6">🏷️</div>
                    <h3 class="text-xl font-bold mb-3">Dynamic Service Tags</h3>
                    <p class="text-gray-700">Categorize your exact skills. Make it incredibly easy for the right clients to find your specific expertise.</p>
                </div>
                <div class="glass-panel p-8 rounded-3xl border-brand/20 bg-brand/5 gs-fade-up" style="transition-delay: 100ms;">
                    <div class="w-12 h-12 bg-brand text-white rounded-2xl shadow-sm flex items-center justify-center text-2xl mb-6">📱</div>
                    <h3 class="text-xl font-bold mb-3">Digital Storefront</h3>
                    <p class="text-gray-700">A beautiful, customizable profile that showcases your work, your prices, and your brand aesthetic.</p>
                </div>
                <div class="glass-panel p-8 rounded-3xl border-brand/20 bg-brand/5 gs-fade-up" style="transition-delay: 200ms;">
                    <div class="w-12 h-12 bg-brand text-white rounded-2xl shadow-sm flex items-center justify-center text-2xl mb-6">📈</div>
                    <h3 class="text-xl font-bold mb-3">Effortless Management</h3>
                    <p class="text-gray-700">We handle the scheduling and visibility. You focus entirely on delivering a glowing service to your clients.</p>
                </div>
            </div>
        </div>

    </div>
</section>

<footer class="py-8 text-center text-gray-500 text-sm border-t border-gray-200">
    <p>&copy; 2026 HiCom Glow. Crafted for excellence.</p>
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

