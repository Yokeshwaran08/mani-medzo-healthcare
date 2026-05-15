import { useState, useRef, useEffect, useCallback } from 'react'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import QuickActionBar from './components/QuickActionBar.jsx'
import ServicesSection from './components/ServicesSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import TestimonialsSection from './components/TestimonialsSection.jsx'
import BookingFormSection from './components/BookingFormSection.jsx'
import LocationSection from './components/LocationSection.jsx'
import Footer from './components/Footer.jsx'

// ─── WhatsApp number (no spaces, with country code) ───────────────────────────
export const WA_NUMBER = '919840957644'

// ─── Apps Script URL ─────────────────────────────────────────────────────────
export const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbycGQ2jIV0DMYbnV-vUh7KCdnEUB3yIbmEzXmC3PDB4Yt9aKNvIfkSBAStwfgoqGXLt/exec'

// ─── Service options ──────────────────────────────────────────────────────────
export const SERVICES = [
  { value: 'appointment', label: 'Appointment' },
  { value: 'order-medicine', label: 'Order Medicine' },
  { value: 'lab-test', label: 'Lab Test' },
]

export default function App() {
  const [selectedService, setSelectedService] = useState('appointment')
  const [highlightedCard, setHighlightedCard] = useState(null) // 'clinic' | 'pharmacy' | 'diagnostics'

  // Section refs for smooth scrolling
  const heroRef     = useRef(null)
  const servicesRef = useRef(null)
  const aboutRef    = useRef(null)
  const formRef     = useRef(null)
  const locationRef = useRef(null)

  const scrollTo = useCallback((ref) => {
    if (!ref?.current) return
    const headerOffset = 80
    const top = ref.current.getBoundingClientRect().top + window.scrollY - headerOffset
    window.scrollTo({ top, behavior: 'smooth' })
  }, [])

  // Navigate to form and pre-select a service
  const goToForm = useCallback((service) => {
    setSelectedService(service)
    // Slight delay so state updates before scroll
    setTimeout(() => scrollTo(formRef), 50)
  }, [scrollTo])

  // Navigate to services and highlight a card
  const goToService = useCallback((card) => {
    setHighlightedCard(card)
    scrollTo(servicesRef)
    // Remove highlight after 2.5s
    setTimeout(() => setHighlightedCard(null), 2500)
  }, [scrollTo])

  // Navigation actions exposed to child components
  const nav = {
    home:       () => scrollTo(heroRef),
    services:   () => scrollTo(servicesRef),
    about:      () => scrollTo(aboutRef),
    form:       (svc) => goToForm(svc || 'appointment'),
    location:   () => scrollTo(locationRef),
    clinic:     () => goToService('clinic'),
    pharmacy:   () => goToService('pharmacy'),
    diagnostics:() => goToService('diagnostics'),
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header nav={nav} />

      <main>
        <section ref={heroRef} id="hero">
          <HeroSection nav={nav} />
        </section>

        <div ref={servicesRef} id="services">
          <QuickActionBar nav={nav} />
          <ServicesSection nav={nav} highlightedCard={highlightedCard} />
        </div>

        <section ref={aboutRef} id="about">
          <AboutSection nav={nav} />
        </section>

        <section id="testimonials">
          <TestimonialsSection />
        </section>

        <section ref={formRef} id="booking">
          <BookingFormSection
            selectedService={selectedService}
            setSelectedService={setSelectedService}
          />
        </section>

        <section ref={locationRef} id="location">
          <LocationSection />
        </section>
      </main>

      <Footer nav={nav} />
    </div>
  )
}
