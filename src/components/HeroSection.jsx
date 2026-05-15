import { WA_NUMBER } from '../App.jsx'

// Place your clinic photo as: public/clinic-interior.png
const CLINIC_IMAGE = '/clinic-interior.png'

export default function HeroSection({ nav }) {
  const waText = encodeURIComponent('Hi, I would like to book an appointment')

  return (
    <div className="bg-white pt-20" style={{ minHeight: '92vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[#22d3ee] text-[#36454f] text-xs font-bold px-4 py-1.5 rounded-full w-fit tracking-widest uppercase">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#22d3ee">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Your Integrated Health Partner
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl font-bold text-[#36454f] leading-tight tracking-tight">
              Trusted Care, Medicines<br />
              &amp;{' '}
              <span className="bg-[#36454f] text-[#00ffff] px-2 py-0.5 inline-block">
                Diagnostics
              </span>
              {' '}— All in<br />
              One Place
            </h1>

            {/* Subtext */}
            <p className="text-[#36454f] text-base lg:text-lg leading-relaxed max-w-xl">
              One stop seamless healthcare integration with TSK Primecare Clinic,
              Mani Medzo Pharmacy, and Thyrocare Diagnostics — technology meets
              compassionate human care. Serving Thazhambur, Chennai
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25d366] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-[#1ebe5d] transition-all duration-200 wa-pulse"
              >
                <WAIcon />
                Book via WhatsApp
              </a>
              <button
                onClick={() => nav.form('appointment')}
                className="inline-flex items-center bg-[#36454f] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#2a3840] transition-all duration-200"
              >
                Book Appointment
              </button>
            </div>

            {/* Address + Timings */}
            <div className="flex flex-col sm:flex-row gap-8 pt-4 border-t border-gray-200">
              <div className="flex items-start gap-3">
                <svg width="16" height="20" viewBox="0 0 24 24" fill="#36454f" className="shrink-0 mt-0.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div>
                  <p className="text-[10px] text-[#36454f]/50 font-medium uppercase tracking-widest mb-0.5">Clinic Address</p>
                  <p className="text-sm text-[#36454f] font-semibold leading-snug">
                    Shop No. 2, No. P5/944,<br />
                    Thazhambur Main Road,<br />
                    Thazhambur, Chennai-600130
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#36454f" className="shrink-0 mt-0.5">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                </svg>
                <div>
                  <p className="text-[10px] text-[#36454f]/50 font-medium uppercase tracking-widest mb-0.5">Daily Timings</p>
                  <p className="text-sm text-[#36454f] font-semibold leading-snug">
                    9am – 10pm (All Days)
                  </p>
                  <p className="text-xs text-[#36454f]/60 leading-snug">
                    Dr. Appts (Mon–Sat): 5pm – 9pm
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Clinic Image */}
          <div className="relative">
            {/*
              The PNG has a light-blue rounded border/padding baked in.
              We match that background colour exactly so there's no visible gap.
              object-cover + w-full + fixed height fills the box completely.
            */}
            {/*
              Using CSS background-image instead of <img> tag.
              background-size: cover is bulletproof — always fills all 4 sides
              regardless of image padding or aspect ratio.
            */}
            <div
              className="shadow-2xl w-full"
              style={{
                height: 432,
                borderRadius: 32,
                backgroundImage: `url(${CLINIC_IMAGE})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            {/* Accreditation badge */}
            <div className="absolute -bottom-5 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-gray-100 z-10">
              <div className="w-10 h-10 bg-[#00ffff] rounded-full flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#36454f">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#181c22]">Accredited by Thyrocare</p>
                <p className="text-xs text-[#414753] italic leading-tight max-w-[200px]">
                  "Top-rated diagnostic services with 100% accuracy."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

function WAIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
