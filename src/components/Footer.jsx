export default function Footer({ nav }) {
  const year = new Date().getFullYear()

  const FooterLink = ({ label, onClick }) => (
    <button
      onClick={onClick}
      className="text-sm text-white/60 hover:text-[#22d3ee] transition-colors text-left cursor-pointer bg-transparent border-0 p-0"
    >
      {label}
    </button>
  )

  return (
    <footer style={{ background: '#0F172A' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand — Mani Medzo */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-[#22d3ee] rounded-lg flex items-center justify-center">
                <span className="text-[#0F172A] font-bold text-lg leading-none">M</span>
              </div>
              <div>
                <div className="text-sm font-bold text-white leading-tight">Mani Medzo</div>
                <div className="text-[10px] text-white/50 leading-tight tracking-wide uppercase">Integrated Healthcare</div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Your trusted partner for comprehensive healthcare — clinic, pharmacy, and diagnostics under one roof in Thazhambur, Chennai.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Services</h4>
            <div className="flex flex-col gap-3">
              <FooterLink label="TSK Primecare Clinic"   onClick={nav.clinic} />
              <FooterLink label="Mani Medzo Pharmacy"    onClick={nav.pharmacy} />
              <FooterLink label="Thyrocare Diagnostics"  onClick={nav.diagnostics} />
              <FooterLink label="Book Appointment"        onClick={() => nav.form('appointment')} />
              <FooterLink label="Order Medicines"         onClick={() => nav.form('order-medicine')} />
              <FooterLink label="Book Lab Test"           onClick={() => nav.form('lab-test')} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <FooterLink label="Home"           onClick={nav.home} />
              <FooterLink label="About Us"       onClick={nav.about} />
              <FooterLink label="Book Now"       onClick={() => nav.form('appointment')} />
              <FooterLink label="Get Directions" onClick={nav.location} />
              <FooterLink label="Contact Us"     onClick={nav.location} />
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-4 text-sm text-white/60 leading-relaxed">
              <div>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Address</p>
                <p>Shop No. 2, No. P5/944,<br />Thazhambur Main Road,<br />Thazhambur, Chennai-600130</p>
              </div>
              <div>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Phone</p>
                <a href="tel:+919840957644" className="hover:text-[#22d3ee] transition-colors font-medium text-white/70">
                  +91 9840957644
                </a>
              </div>
              <div>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:manimedzopharmacy@gmail.com" className="hover:text-[#22d3ee] transition-colors break-all">
                  manimedzopharmacy@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar — centered copyright */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-xs text-white/40">
            © {year} TSK Primecare. All rights reserved.
          </p>
          <p className="text-xs text-white/40 mt-1">
            Clinic · Pharmacy · Diagnostics — All in One Place
          </p>
        </div>
      </div>
    </footer>
  )
}
