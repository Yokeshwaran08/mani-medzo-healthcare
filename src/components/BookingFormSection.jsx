import { useState } from 'react'
import { WA_NUMBER, SCRIPT_URL, SERVICES } from '../App.jsx'

export default function BookingFormSection({ selectedService, setSelectedService }) {
  const [name, setName]         = useState('')
  const [phone, setPhone]       = useState('')
  const [message, setMessage]   = useState('')
  const [status, setStatus]     = useState('idle')   // idle | loading
  const [toast, setToast]       = useState(false)    // success notification
  const [errors, setErrors]     = useState({})       // field-level errors

  const serviceLabel = (val) => SERVICES.find((s) => s.value === val)?.label || val

  // ── Show a timed toast ────────────────────────────────────────────────────
  const showToast = () => {
    setToast(true)
    setTimeout(() => setToast(false), 6000)
  }

  // ── Name: letters + spaces only — alert on bad char ─────────────────────
  const handleNameChange = (e) => {
    const raw = e.target.value
    if (/[^a-zA-Z\s]/.test(raw)) {
      setErrors((prev) => ({
        ...prev,
        name: '⚠️ Name should contain letters only. Numbers and symbols are not allowed.',
      }))
    } else {
      setErrors((prev) => ({ ...prev, name: '' }))
    }
    setName(raw.replace(/[^a-zA-Z\s]/g, ''))
  }

  // ── Phone: digits only — alert on bad char ───────────────────────────────
  const handlePhoneChange = (e) => {
    const raw = e.target.value
    if (/[^0-9]/.test(raw)) {
      setErrors((prev) => ({
        ...prev,
        phone: '⚠️ Phone number should contain digits only. Letters and symbols are not allowed.',
      }))
    } else {
      setErrors((prev) => ({ ...prev, phone: '' }))
    }
    setPhone(raw.replace(/\D/g, ''))
  }

  // ── Submit ────────────────────────────────────────────────────────────────
  const handleSubmit = () => {
    const newErrors = {}

    if (!name.trim()) {
      newErrors.name = '⚠️ Please enter your full name (letters only).'
    }
    if (!phone.trim()) {
      newErrors.phone = '⚠️ Please enter your phone number (10 digits).'
    } else if (phone.length < 10) {
      newErrors.phone = '⚠️ Phone number must be at least 10 digits. Please enter a valid Indian mobile number.'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setStatus('loading')

    const isHosted =
      window.location.protocol === 'https:' ||
      window.location.hostname === 'localhost'

    const finalize = () => {
      // Build dynamic WhatsApp message
      const svcLabel = serviceLabel(selectedService)
      const waMsg = `Hi, my name is ${name.trim()}. I would like to ${svcLabel}.${
        message.trim() ? ' ' + message.trim() : ''
      }`
      window.open(
        `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMsg)}`,
        '_blank',
        'noopener,noreferrer'
      )
      setStatus('idle')
      setName('')
      setPhone('')
      setMessage('')
      showToast()   // ← show success notification AFTER WhatsApp opens
    }

    if (isHosted) {
      const params = new URLSearchParams({
        name:    name.trim(),
        service: serviceLabel(selectedService),
        phone:   phone.trim(),
        message: message.trim(),
      })
      fetch(`${SCRIPT_URL}?${params.toString()}`, { method: 'GET', mode: 'no-cors' })
        .then(finalize)
        .catch(finalize)
    } else {
      finalize()
    }
  }

  // ── Field component ───────────────────────────────────────────────────────
  const FieldError = ({ msg }) =>
    msg ? (
      <p className="text-red-500 text-xs mt-1 leading-snug">{msg}</p>
    ) : null

  return (
    <section className="py-20 bg-[#36454f] relative">

      {/* ── Success Toast Notification ── */}
      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ${
          toast ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6 pointer-events-none'
        }`}
        style={{ minWidth: 320, maxWidth: 480 }}
      >
        <div className="bg-white border border-green-200 rounded-2xl shadow-2xl px-6 py-5 flex items-start gap-4">
          {/* Green check circle */}
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#16a34a">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold text-[#36454f] text-base leading-tight">
              Your details have been sent! ✅
            </p>
            <p className="text-[#36454f]/70 text-sm leading-relaxed">
              Thank you for reaching out. Our team will contact you shortly to confirm your booking.
            </p>
          </div>
          {/* Close button */}
          <button
            onClick={() => setToast(false)}
            className="ml-auto text-[#36454f]/40 hover:text-[#36454f] transition-colors shrink-0 bg-transparent border-0 cursor-pointer p-1"
            aria-label="Dismiss"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Info */}
          <div className="text-white flex flex-col gap-8 pt-2">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
                Book in 30 Seconds
              </h2>
              <p className="text-white/70 text-lg leading-relaxed max-w-md">
                Select your required service and our coordinator will call you back
                within 15 minutes to confirm your slot.
              </p>
            </div>

            {/* Phone */}
            <a href="tel:+919840957644" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-[#22d3ee]/30 flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#22d3ee">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-white/50 uppercase tracking-widest font-medium">Immediate Assistance</p>
                <p className="text-white text-xl font-normal">+91 9840957644</p>
              </div>
            </a>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-[#22d3ee]/30 flex items-center justify-center shrink-0">
                <svg width="20" height="19" viewBox="0 0 24 24" fill="#22d3ee">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-white/50 uppercase tracking-widest font-medium">General Enquiries</p>
                <p className="text-white text-xl font-normal">manimedzopharmacy@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right — Form Card */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="flex flex-col gap-5">

              {/* Name + Phone row */}
              <div className="grid sm:grid-cols-2 gap-5">

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-medium text-[#36454f] uppercase tracking-widest">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="John Doe"
                    inputMode="text"
                    className={`bg-[#f8fafc] border rounded-xl px-4 py-3 text-base text-[#36454f] placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#22d3ee] focus:border-transparent transition-all ${
                      errors.name ? 'border-red-400' : 'border-[#e2e8f0]'
                    }`}
                  />
                  <FieldError msg={errors.name} />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-medium text-[#36454f] uppercase tracking-widest">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="9876543210"
                    inputMode="numeric"
                    maxLength={15}
                    className={`bg-[#f8fafc] border rounded-xl px-4 py-3 text-base text-[#36454f] placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#22d3ee] focus:border-transparent transition-all ${
                      errors.phone ? 'border-red-400' : 'border-[#e2e8f0]'
                    }`}
                  />
                  <FieldError msg={errors.phone} />
                </div>

              </div>

              {/* Service Dropdown */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-medium text-[#36454f] uppercase tracking-widest">
                  Select Service
                </label>
                <div className="relative">
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3 text-base text-[#36454f] focus:outline-none focus:ring-2 focus:ring-[#22d3ee] focus:border-transparent appearance-none cursor-pointer transition-all pr-10"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#36454f">
                      <path d="M7 10l5 5 5-5z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-medium text-[#36454f] uppercase tracking-widest">
                  Message (Optional)
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help you today?"
                  rows={3}
                  className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3 text-base text-[#36454f] placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#22d3ee] focus:border-transparent resize-none transition-all"
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={status === 'loading'}
                className="w-full bg-[#25d366] hover:bg-[#1ebe5d] disabled:opacity-60 text-white font-semibold py-4 rounded-full flex items-center justify-center gap-3 transition-all duration-200 shadow-lg cursor-pointer text-base mt-1"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 3a9 9 0 1 0 9 9" strokeLinecap="round"/>
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <WAIcon />
                    Continue to WhatsApp
                  </>
                )}
              </button>

              {/* Instruction */}
              <p className="text-center text-xs text-[#36454f]/50 leading-relaxed">
                After clicking, tap <strong>"Send"</strong> in WhatsApp to confirm your request
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function WAIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
