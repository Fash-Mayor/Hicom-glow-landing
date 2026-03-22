import { useEffect } from 'react'

const WAITLIST_HTML = `
<div class="glow-bg" id="mouseGlow"></div>

<nav class="fixed w-full z-50 glass-panel border-b-0 border-white/10 transition-all duration-300" id="navbar">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div class="text-2xl font-extrabold tracking-tighter flex items-center gap-2 gs-reveal">
            <a href="landing.html">
                <span class="hicom pr-1">HiCom</span>
                <span class="glow">Glow</span>
            </a>
        </div>
        <a href="#waitlist-form"
            class="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full font-medium transition-colors border border-white/10 gs-reveal">
            Join Waitlist
        </a>
    </div>
</nav>

<main class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

    <div class="absolute top-1/4 left-1/4 w-64 h-64 border border-brand/50 rounded-full float-element"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 border border-brand/50 rounded-full float-element"
        style="animation-delay: -3s;"></div>

    <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

        <div class="space-y-8 text-left">
            <div
                class="inline-block px-4 py-1.5 rounded-full border border-brand/30 bg-brand/10 text-brand-light font-medium text-sm gs-hero">
                ✨ A new standard for service discovery
            </div>
            <h1 class="text-4xl md:text-6xl font-extrabold leading-tight gs-hero">
                Discover perfection <br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">Elevate your
                    craft.</span>
            </h1>
            <p class="text-lg text-gray-400 max-w-lg gs-hero leading-relaxed">
                Finding quality shouldn't be a chore. HiCom Glow is the premium marketplace bridging top-tier beauty
                service providers with high-value clients.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 gs-hero pt-4">
                <a href="#waitlist-form" class="btn-glow bg-brand text-white px-8 py-4 rounded-xl font-bold text-center">
                    Experience the Glow
                </a>
                <a href="landing.html"
                    class="glass-panel px-8 py-4 rounded-xl font-semibold text-center hover:bg-white/5 transition">
                    Explore Features
                </a>
            </div>
        </div>

        <div class="relative flex justify-center items-center gs-hero-image hidden lg:flex">
            <div
                class="glass-panel w-80 h-[600px] rounded-[40px] border-8 border-gray-900 relative overflow-hidden shadow-2xl float-element z-10 flex flex-col items-center pt-12">
                <div
                    class="w-24 h-24 rounded-full bg-brand/20 border-2 border-brand mb-6 flex items-center justify-center">
                    <span class="text-3xl">✨</span>
                </div>
                <div class="h-4 w-32 bg-white/20 rounded-full mb-3"></div>
                <div class="h-3 w-48 bg-white/10 rounded-full mb-10"></div>

                <div class="w-full px-6 space-y-4">
                    <div class="h-16 w-full glass-panel rounded-xl flex items-center px-4">
                        <div class="w-10 h-10 rounded-full bg-brand/30 mr-3"></div>
                        <div class="h-3 w-24 bg-white/20 rounded-full"></div>
                    </div>
                    <div class="h-16 w-full glass-panel rounded-xl flex items-center px-4">
                        <div class="w-10 h-10 rounded-full bg-brand/30 mr-3"></div>
                        <div class="h-3 w-20 bg-white/20 rounded-full"></div>
                    </div>
                </div>
            </div>
            <div class="absolute w-96 h-96 bg-brand/40 rounded-full blur-[100px] -z-10"></div>
        </div>
    </div>
</main>

<section id="waitlist" class="py-20 relative z-10">
    <div class="max-w-3xl mx-auto px-2 text-center">
        <div class="glass-panel rounded-3xl p-10 md:p-12 relative overflow-hidden gs-fade-up">
            <div
                class="absolute top-0 right-0 w-64 h-64 bg-brand/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2">
            </div>

            <h2 class="text-4xl font-bold mb-4 relative z-10">Join the Founding Family</h2>
            <p class="text-gray-400 mb-8 relative z-10">The first 100 users get a 'Founding Member' badge and 0%
                service fees for the first 6 months.</p>

            <form id="waitlist-form" class="flex flex-col sm:flex-row gap-3 relative z-10">
                <select id="user-type"
                    class="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand appearance-none"
                    required>
                    <option value="" disabled selected class="text-gray-900">I am a...</option>
                    <option value="customer" class="text-gray-900">Customer</option>
                    <option value="provider" class="text-gray-900">Service Provider</option>
                </select>

                <input type="email" id="user-email" placeholder="Enter your email address"
                    class="flex-1 bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand transition-colors"
                    required>

                <button type="submit" id="submit-btn"
                    class="bg-white text-black font-bold px-6 py-4 rounded-xl hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[160px]">
                    <span id="btn-text">Secure Spot</span>
                    <svg id="btn-spinner" class="hidden animate-spin h-5 w-5 text-black" ...>
                    </svg>
                </button>
            </form>
        </div>
    </div>
</section>

<footer class="border-t border-white/10 py-8 text-center text-gray-500 text-sm mt-3">
    <p>&copy; 2026 HiCom Glow. All rights reserved.</p>
</footer>

<!-- success Modal -->
<div id="success-modal"
    class="fixed inset-0 z-[100] flex items-center justify-center px-6 hidden opacity-0 backdrop-blur-sm">
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
    <div class="glass-panel relative max-w-sm w-full p-8 rounded-3xl text-center border border-white/10 shadow-2xl">
        <div class="w-16 h-16 bg-brand/20 border border-brand rounded-full flex items-center justify-center mx-auto mb-6">
            <span class="w-8 h-8">
                <img src="favicon.png" alt="">
            </span>
        </div>
        <h3 class="text-2xl font-bold mb-2">Yaaayyy!</h3>
        <p class="text-gray-400 mb-8 leading-relaxed">
            Welcome to the founding family. We'll reach out to you as soon as we're ready to glow.
        </p>
        <button id="close-modal"
            class="w-full bg-white text-black flex items-center justify-center font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors">
            Great, thanks!
        </button>
    </div>
</div>

<!-- error modal -->
<div id="error-modal"
    class="fixed inset-0 z-[100] flex items-center justify-center px-6 hidden opacity-0 backdrop-blur-sm">
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
    <div class="glass-panel relative max-w-sm w-full p-8 rounded-3xl text-center border border-white/10 shadow-2xl">
        <div class="w-16 h-16 bg-red-500/20 border border-red-500/50 rounded-full flex items-center justify-center mx-auto mb-6">
            <span class="text-2xl text-red-500">👋</span>
        </div>
        <h3 class="text-2xl font-bold mb-2 text-white">Already Glowing!</h3>
        <p class="text-gray-400 mb-8 leading-relaxed">
            It looks like this email is already on our waitlist. We’ve saved your spot among the founding family!
        </p>
        <button id="close-error-modal"
            class="w-full bg-white text-black flex items-center justify-center font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors">
            Got it, thanks!
        </button>
    </div>
</div>
`

export default function App() {
  useEffect(() => {
    const w = window as any
    const gsap = w.gsap as any
    const ScrollTrigger = w.ScrollTrigger as any

    if (!gsap || !ScrollTrigger || !w.supabase) return

    gsap.registerPlugin(ScrollTrigger)

    const waitlistForm = document.getElementById('waitlist-form') as HTMLFormElement | null
    const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement | null
    const btnText = document.getElementById('btn-text') as HTMLSpanElement | null
    const btnSpinner = document.getElementById('btn-spinner') as HTMLElement | null
    const mouseGlow = document.getElementById('mouseGlow')

    if (!waitlistForm || !submitBtn || !btnText || !btnSpinner || !mouseGlow) return;

    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined
    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing Supabase env vars: VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY')
      return
    }

    const _supabase = w.supabase.createClient(supabaseUrl, supabaseKey)

    function closeModal(modalId: string) {
      const modal = document.getElementById(modalId)
      if (!modal) return

      gsap.to(modal, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          modal.classList.add('hidden')
        },
      })
    }

    function openModal(modalId: string) {
      const modal = document.getElementById(modalId)
      if (!modal) return

      const panel = modal.querySelector('.glass-panel') as HTMLElement | null
      if (!panel) return

      modal.classList.remove('hidden')

      gsap.to(modal, { opacity: 1, duration: 0.4, ease: 'power2.out' })
      gsap.fromTo(
        panel,
        { scale: 0.8, y: 30, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' },
      )
    }

    const onCloseSuccess = () => closeModal('success-modal')
    const onCloseError = () => closeModal('error-modal')

    const closeModalBtn = document.getElementById('close-modal')
    const closeErrorBtn = document.getElementById('close-error-modal')
    closeModalBtn?.addEventListener('click', onCloseSuccess)
    closeErrorBtn?.addEventListener('click', onCloseError)

    const modalElements = Array.from(document.querySelectorAll('[id$="-modal"]')) as HTMLElement[]
    const modalClickHandlers = modalElements.map((modal) => {
      const handler = (e: MouseEvent) => {
        const target = e.target as HTMLElement | null
        if (!target) return
        if (target === modal || target.classList.contains('absolute')) {
          closeModal(modal.id)
        }
      }
      modal.addEventListener('click', handler)
      return { modal, handler }
    })

    const waitlistLinks = Array.from(document.querySelectorAll('a[href="#waitlist"]'))
    const waitlistLinkHandlers = waitlistLinks.map((link) => {
      const handler = function (e: MouseEvent) {
        e.preventDefault()
        const target = document.querySelector('#waitlist') as HTMLElement | null
        if (!target) return
        const headerOffset = 120
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset
        gsap.to(window, { duration: 0.2, scrollTo: targetPosition, ease: 'power2.inOut' })
      }
      link.addEventListener('click', handler as any)
      return { link, handler }
    })

    const onSubmit = async (e: Event) => {
      e.preventDefault()

      submitBtn.disabled = true
      btnText.textContent = 'Saving...'
      btnSpinner.classList.remove('hidden')

      const emailEl = document.getElementById('user-email') as HTMLInputElement | null
      const userTypeEl = document.getElementById('user-type') as HTMLSelectElement | null
      const email = emailEl?.value ?? ''
      const userType = userTypeEl?.value ?? ''

      try {
        const { error } = await _supabase.from('waitlist').insert([
          {
            email: email.toLowerCase().trim(),
            user_type: userType,
          },
        ])

        if (error) {
          if (error.code === '23505') {
            openModal('error-modal')
            return
          }
          throw error
        }

        openModal('success-modal')
        waitlistForm.reset()
      } catch (err) {
        console.error('Submission error:', err)
        alert('Something went wrong. Please check your connection.')
      } finally {
        submitBtn.disabled = false
        btnText.textContent = 'Secure Spot'
        btnSpinner.classList.add('hidden')
      }
    }

    waitlistForm.addEventListener('submit', onSubmit)

    // --- Aesthetic Animations (Timeline) ---
    const tl = gsap.timeline()
    tl.from('.gs-reveal', { y: -20, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }).from(
      '.gs-hero',
      { y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: 'power4.out' },
      '-=0.5',
    )

    // Mouse Glow
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(mouseGlow, {
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
        duration: 0.8,
        ease: 'power2.out',
      })
    }

    document.addEventListener('mousemove', onMouseMove)

    return () => {
      closeModalBtn?.removeEventListener('click', onCloseSuccess)
      closeErrorBtn?.removeEventListener('click', onCloseError)
      modalClickHandlers.forEach(({ modal, handler }) => modal.removeEventListener('click', handler))
      waitlistLinkHandlers.forEach(({ link, handler }) => link.removeEventListener('click', handler as any))
      waitlistForm.removeEventListener('submit', onSubmit)
      document.removeEventListener('mousemove', onMouseMove)
      // Note: we don't kill the GSAP timeline; it has no side effects besides animations.
    }
  }, [])

  return <div dangerouslySetInnerHTML={{ __html: WAITLIST_HTML }} />
}

