import { WA_NUMBER } from '../App.jsx'

export default function LocationSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — Contact Info */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#36454f] tracking-tight">
              Visit Us
            </h2>

            <div className="flex flex-col gap-7">
              {/* Address — corrected */}
              <div className="flex items-start gap-4">
                <svg width="16" height="20" viewBox="0 0 24 24" fill="#36454f" className="shrink-0 mt-0.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <p className="text-[#36454f] text-base leading-relaxed">
                  Mani Medzo Pharmacy, Shop No. 2, No. P5/944,<br />
                  Thazhambur Main Road, Thazhambur, Chennai-600130
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#36454f" className="shrink-0 mt-0.5">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <a href="tel:+919840957644" className="text-[#36454f] text-base font-medium hover:text-[#22d3ee] transition-colors">
                  +91 9840957644
                </a>
              </div>

              {/* Timings — updated */}
              <div className="flex items-start gap-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#36454f" className="shrink-0 mt-0.5">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                </svg>
                <div>
                  <p className="text-[#36454f] text-base">Pharmacy: 9:00 AM – 10:00 PM (All Days)</p>
                  <p className="text-[#36454f] text-base">Doctor Appointments (Mon–Sat): 5:00 PM – 9:00 PM</p>
                  <p className="text-[#36454f]/60 text-sm mt-1">Open 7 days a week</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi, I would like to chat on WhatsApp')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25d366] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-[#1ebe5d] transition-all duration-200 w-fit mt-2"
            >
              <WAIcon />
              Chat with us on WhatsApp
            </a>
          </div>

          {/* Right — Google Map */}
          <div
            className="rounded-[32px] overflow-hidden border border-[#e2e8f0] shadow-2xl"
            style={{ height: 420 }}
          >
            {/*
              Exact place from https://maps.app.goo.gl/QmCF2FDURvpUsvLQ6
              Resolved to: Mani Medzo Pharmacy
              Lat: 12.8484418  Lng: 80.2132443
              Place ID: 0x3a525b659889d20d:0x7b410163ee036e4f
            */}
            <iframe
              title="Mani Medzo Pharmacy – Thazhambur, Chennai"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.9!2d80.2132443!3d12.8484418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b659889d20d%3A0x7b410163ee036e4f!2sMani%20Medzo%20Pharmacy!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
