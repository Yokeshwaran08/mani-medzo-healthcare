// Thyrocare logo from uploaded file
const THYROCARE_LOGO = '/thyrocare-logo.jpg'

const CheckIcon = ({ dark }) => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill={dark ? '#36454f' : '#22d3ee'} className="shrink-0 mt-0.5">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
  </svg>
)

// ── Icon 1: Stethoscope — universally recognisable design ───────────────────
const StethoscopeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    {/* Left earpiece — angled up-left */}
    <line x1="7" y1="8" x2="5" y2="4" stroke="#36454f" strokeWidth="2" strokeLinecap="round"/>
    {/* Right earpiece — angled up-right */}
    <line x1="15" y1="8" x2="17" y2="4" stroke="#36454f" strokeWidth="2" strokeLinecap="round"/>
    {/* Left earpiece tip */}
    <circle cx="4.5" cy="3.5" r="1.5" fill="#36454f"/>
    {/* Right earpiece tip */}
    <circle cx="17.5" cy="3.5" r="1.5" fill="#36454f"/>
    {/* U-shaped tube body */}
    <path d="M7 8 C7 14 7.5 16 11 16 C14.5 16 15 14 15 8" stroke="#36454f" strokeWidth="2" strokeLinecap="round" fill="none"/>
    {/* Vertical stem down from U bottom */}
    <path d="M11 16 L11 20" stroke="#36454f" strokeWidth="2" strokeLinecap="round"/>
    {/* Curve toward chest piece */}
    <path d="M11 20 Q11 23 14 23" stroke="#36454f" strokeWidth="2" strokeLinecap="round" fill="none"/>
    {/* Chest piece — large filled disc */}
    <circle cx="17.5" cy="23" r="3.5" fill="#36454f"/>
    {/* Shine dot on chest piece */}
    <circle cx="16.5" cy="22" r="0.9" fill="white" opacity="0.5"/>
  </svg>
)

// ── Icon 2: Medicine / Pill box (Mani Medzo Pharmacy) — matches Figma ────────
const MedicineIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#36454f">
    <path d="M11 9H9V7H7v2H5v2h2v2h2v-2h2V9zm8.5-1a4.5 4.5 0 0 0-4.5 4.5c0 1.04.36 2 .95 2.75L9.26 21.5A2 2 0 0 0 9 22a2 2 0 0 0 2 2 2 2 0 0 0 1.41-.59l6.25-6.24c.75.59 1.71.95 2.75.95A4.5 4.5 0 0 0 26 13.5 4.5 4.5 0 0 0 19.5 9zm0 7a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 19.5 11a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 19.5 16z"/>
  </svg>
)

// ── Icon 2 alternative: exact medicine/pill box like Figma ───────────────────
const PharmacyIcon = () => (
  <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
    {/* Medicine cabinet / box icon matching Figma */}
    <rect x="1" y="5" width="18" height="18" rx="2" stroke="#36454f" strokeWidth="1.8" fill="none"/>
    <path d="M1 10h18" stroke="#36454f" strokeWidth="1.8"/>
    {/* Cross / plus inside */}
    <line x1="10" y1="14" x2="10" y2="20" stroke="#36454f" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="7" y1="17" x2="13" y2="17" stroke="#36454f" strokeWidth="1.8" strokeLinecap="round"/>
    {/* Lid handle */}
    <path d="M7 5V3a3 3 0 0 1 6 0v2" stroke="#36454f" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

// ── Icon 3: Lab Flask / Beaker (Thyrocare Diagnostics) — matches Figma ───────
const FlaskIcon = () => (
  <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
    <path
      d="M8 2v8L2 18a2 2 0 0 0 1.8 2.8h14.4A2 2 0 0 0 20 18L14 10V2"
      stroke="#36454f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    />
    <line x1="7" y1="2" x2="15" y2="2" stroke="#36454f" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="8" cy="17" r="1.2" fill="#36454f"/>
    <circle cx="13" cy="15" r="0.9" fill="#36454f"/>
  </svg>
)

export default function ServicesSection({ nav, highlightedCard }) {
  return (
    <section className="py-20 bg-[#f7fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#36454f] tracking-tight mb-4">
            Our Integrated Ecosystem
          </h2>
          <p className="text-[#36454f] text-base max-w-2xl mx-auto leading-relaxed">
            Comprehensive healthcare services designed around your convenience and medical excellence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">

          {/* ── CARD 1: TSK Primecare Clinic ── */}
          <div
            className={`bg-white border rounded-3xl p-8 flex flex-col transition-all duration-300 ${
              highlightedCard === 'clinic'
                ? 'border-[#22d3ee] ring-2 ring-[#22d3ee] shadow-2xl -translate-y-2'
                : 'border-[#e2e8f0] shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border-[#22d3ee]'
            }`}
          >
            {/* Stethoscope icon — light grey bg, matching Figma */}
            <div className="bg-[#f1f5f9] w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <StethoscopeIcon />
            </div>
            <h3 className="text-2xl font-semibold text-[#36454f] mb-4 leading-snug">TSK Primecare Clinic</h3>
            <p className="text-[#36454f] text-base leading-relaxed mb-6">
              Primary care and specialized consultations focused on patient comfort.
            </p>
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {['General Consultation', 'Fever, Cold & Routine Care', 'Follow-up Visits'].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckIcon />
                  <span className="text-base text-[#36454f]">{f}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => nav.about()}
              className="w-full border border-[#36454f] text-[#36454f] text-base font-medium py-3 px-4 rounded-xl hover:bg-[#36454f] hover:text-white transition-all duration-200 cursor-pointer"
            >
              Clinic Details
            </button>
          </div>

          {/* ── CARD 2: Mani Medzo Pharmacy — cyan bg ── */}
          <div
            className={`bg-[#00ffff] border rounded-3xl p-8 flex flex-col overflow-hidden transition-all duration-300 ${
              highlightedCard === 'pharmacy'
                ? 'border-[#36454f] ring-2 ring-[#36454f] shadow-2xl -translate-y-2'
                : 'border-[#e5e7eb] shadow-md hover:shadow-xl hover:-translate-y-0.5 hover:border-[#36454f]'
            }`}
          >
            {/* Medicine box icon — white bg, matching Figma */}
            <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <PharmacyIcon />
            </div>
            <h3 className="text-2xl font-semibold text-[#36454f] mb-4 leading-snug">Mani Medzo Pharmacy</h3>
            <p className="text-[#36454f] text-base leading-relaxed mb-6">
              Fast and reliable access to medicines.
            </p>
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {[
                'Prescription Medicines',
                'Over-the-Counter Medicines',
                'Home Delivery\n(Orders above ₹1500)',
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckIcon dark />
                  <span className="text-base text-[#36454f] whitespace-pre-line">{f}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => nav.form('order-medicine')}
              className="w-full bg-[#36454f] text-white text-base font-medium py-3 px-4 rounded-xl hover:bg-[#2a3840] transition-all duration-200 cursor-pointer shadow-md"
            >
              Order Medicine
            </button>
          </div>

          {/* ── CARD 3: Thyrocare Diagnostics ── */}
          <div
            className={`bg-white border rounded-3xl p-8 flex flex-col relative transition-all duration-300 ${
              highlightedCard === 'diagnostics'
                ? 'border-[#22d3ee] ring-2 ring-[#22d3ee] shadow-2xl -translate-y-2'
                : 'border-[#e2e8f0] shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border-[#22d3ee]'
            }`}
          >
            {/* Thyrocare logo — top right, aligned with icon height, properly sized */}
            <div className="absolute top-8 right-8 flex items-center justify-center" style={{ width: 70, height: 56 }}>
              <img
                src={THYROCARE_LOGO}
                alt="Thyrocare"
                className="w-full h-full object-contain rounded-md"
              />
            </div>

            {/* Flask / beaker icon — light grey bg, matching Figma */}
            <div className="bg-[#f1f5f9] w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <FlaskIcon />
            </div>
            <h3 className="text-2xl font-semibold text-[#36454f] mb-4 leading-snug">Thyrocare Diagnostics</h3>
            <p className="text-[#36454f] text-base leading-relaxed mb-6 italic">
              Accurate lab testing through trusted diagnostics
            </p>
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {['Blood Tests', 'Thyroid Profiles', 'Full Body Checkups'].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckIcon />
                  <span className="text-base text-[#36454f]">{f}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => nav.form('lab-test')}
              className="w-full border border-[#36454f] text-[#36454f] text-base font-medium py-3 px-4 rounded-xl hover:bg-[#36454f] hover:text-white transition-all duration-200 cursor-pointer"
            >
              Book Lab Test
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
