const testimonials = [
  {
    quote: 'The convenience of having a clinic, pharmacy, and lab all in one location is unmatched. Dr. Sudhan was incredibly thorough with my diagnosis, and the medicine delivery was prompt.',
    name: 'Ravi Kumar',
    avatarBg: '#00ffff',
    initials: 'RK',
  },
  {
    quote: 'Extremely professional staff. I got my Thyrocare blood reports on my WhatsApp the same evening. It saves so much time compared to traditional hospitals.',
    name: 'Priya S.',
    avatarBg: '#e2e8f0',
    initials: 'PS',
  },
]

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
)

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#f7fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#36454f] tracking-tight mb-4">
            What Our Patients Say
          </h2>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-[#e2e8f0] rounded-3xl flex flex-col gap-5 relative overflow-hidden"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '36px' }}
            >
              {/* Decorative cyan accent bar — top of card */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                style={{ background: '#00ffff' }}
              />

              {/* Large decorative opening quote — top-left, inside card, cyan colour */}
              <div
                className="text-[#00ffff] font-serif select-none leading-none"
                style={{ fontSize: 72, lineHeight: 0.8, marginBottom: -8, marginTop: 4 }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Quote text */}
              <p className="text-[#36454f] text-base leading-relaxed" style={{ color: '#4a5568' }}>
                {t.quote}
              </p>

              {/* Divider */}
              <div className="border-t border-[#f1f5f9]" />

              {/* Author row */}
              <div className="flex items-center gap-4">
                {/* Avatar circle with initials */}
                <div
                  className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center font-bold text-sm"
                  style={{ background: t.avatarBg, color: '#36454f' }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-[#36454f] font-semibold text-sm leading-tight">{t.name}</p>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
