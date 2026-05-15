import { WA_NUMBER } from '../App.jsx'

export default function AboutSection({ nav }) {
  const highlights = [
    { text: 'Quick Consultation & Support' },
    { text: 'Experienced Medical Care' },
    { text: 'Easy Access to Medicines & Lab Tests' },
    { text: 'Trusted by Local Community' },
  ]

  const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#36454f" className="shrink-0">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
    </svg>
  )

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#36454f] tracking-tight">
            About TSK Primecare Clinic
          </h2>

          {/* Description */}
          <p className="text-[#36454f] text-base leading-relaxed max-w-5xl">
            At TSK Primecare, we believe that healthcare is a journey of partnership. Our facility
            is designed to prioritize patient comfort, reducing the anxiety often associated with
            medical visits through a calm, clinical yet warm environment. We provide reliable and
            affordable healthcare for individuals and families. With a focus on patient comfort
            and quick service, we ensure every visit is smooth and effective.
          </p>

          {/* Feature Grid — 2×2 */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white border border-[#f1f5f9] rounded-2xl px-6 py-5 shadow-sm"
              >
                <CheckIcon />
                <span className="text-[#36454f] font-normal text-base">{h.text}</span>
              </div>
            ))}
          </div>

          {/* Doctor Card */}
          <div className="bg-[#36454f] rounded-3xl p-8 text-white flex flex-col gap-2">
            <h4 className="text-xl font-semibold text-white">Dr. Sudhan S</h4>
            <p className="text-[#22d3ee] text-xs font-medium tracking-widest uppercase">
              M.S., General Surgeon
            </p>
            <p className="text-white/90 text-sm leading-relaxed mt-2 max-w-2xl">
              Expert in General Surgery and specialized patient care with over 4 years of surgical excellence.
            </p>
          </div>

          {/* CTA */}
          <div>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi, I would like to learn more about TSK Primecare Clinic')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#36454f] text-white font-semibold px-10 py-4 rounded-full hover:bg-[#2a3840] transition-all duration-200 shadow-md"
            >
              Learn More About Us
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
