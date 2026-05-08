import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Car, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  Star,
  CheckCircle2,
  MessageSquare,
  Zap,
  UserCheck,
  Mail,
  ExternalLink
} from 'lucide-react';
import { 
  CONTACT_INFO, 
  PRICING, 
  FLEET, 
  SPECIAL_OFFERS, 
  WHY_CHOOSE_US,
  DRIVER_PROFILES
} from './constants';

export default function App() {
  const handleCall = () => window.open(`tel:${CONTACT_INFO.phone}`);
  const handleWhatsApp = () => window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g,'')}`);

  return (
    <div className="min-h-screen pb-20 selection:bg-accent-blue selection:text-white">
      {/* Super Header / Nav */}
      <nav className="relative z-50 glass border-b border-black/[0.05] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg border border-black/5 bg-white">
              <img 
                src="https://github.com/richdadpoordad78-creator/logo/blob/main/01b83e2a-449e-4ddb-b2ec-7816cbdb2073.jpg?raw=true" 
                alt="Black Car DFW Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight leading-none">Black Car <span className="text-gold">DFW</span></h1>
              <p className="text-[10px] text-[#86868B] font-bold uppercase tracking-[0.2em] mt-1">Premium Transportation</p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <a href="#rates" className="text-sm font-medium hover:text-accent-blue transition-colors font-sans">Rates</a>
            <a href="#fleet" className="text-sm font-medium hover:text-accent-blue transition-colors font-sans">Fleet</a>
            <a href="#offers" className="text-sm font-medium hover:text-accent-blue transition-colors font-sans">Privileges</a>
          </div>

          <button 
            onClick={handleCall}
            className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden hero-gradient">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="expressive-tag bg-black text-white">Elite Service</span>
              <span className="expressive-tag bg-gold/10 text-gold">24/7 Available</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black apple-text mb-8 text-[#1D1D1F]">
              Premium Luxury <br />
              <span className="text-gold italic">Black Car</span> <br />
              Service in Dallas
            </h2>
            <p className="text-xl md:text-2xl apple-subtext leading-relaxed max-w-xl mb-12">
              "Experience premium 24/7 DFW and Love Field transfers with our luxury SUVs, Sprinters, and $1M Commercial Insurance for all passengers."
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleCall}
                className="bg-black text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:-translate-y-1 transition-all"
              >
                Reserve Your Ride
              </button>
              <button 
                onClick={handleWhatsApp}
                className="bg-white border border-black/10 px-10 py-5 rounded-2xl font-bold text-lg shadow-sm hover:shadow-md transition-all flex items-center gap-3"
              >
                <MessageSquare className="w-6 h-6 text-green-500" /> WhatsApp
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gold/20 blur-[120px] rounded-full" />
            <img 
              src="https://github.com/richdadpoordad78-creator/roonie-car-assests/blob/main/Black%20Red%20Modern%20Glow%20Review%20Car%20Youtube%20Thumbnail.png?raw=true" 
              alt="Luxury Fleet Showcase" 
              className="relative z-10 w-full rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] hover:scale-[1.02] transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6">
        {/* Why Choose Us - Apple Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          <div className="bento-card bg-gold !text-white lg:col-span-1">
            <Star className="w-12 h-12 mb-6 fill-white" />
            <h3 className="text-3xl font-black mb-4">Customer Satisfaction</h3>
            <p className="text-white/80 font-medium font-sans">Our priority is providing safe, smooth, and comfortable rides for every passenger.</p>
          </div>
          
          <div className="bento-card lg:col-span-2">
            <h3 className="bento-card-title">The Excellence Standard</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {WHY_CHOOSE_US.slice(0, 6).map((point, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-night flex items-center justify-center group-hover:bg-accent-blue/10 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-accent-blue" />
                  </div>
                  <span className="text-sm font-semibold text-[#424245] font-sans">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Tables */}
        <section id="rates" className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Transparent Pricing</h2>
            <p className="apple-subtext text-lg">No hidden fees. Premium service at competitive rates.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Dallas Area */}
            <div className="bento-card">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-3xl font-black font-sans">Dallas Area</h3>
                  <p className="apple-subtext text-xs uppercase tracking-widest mt-1">Professional Coverage</p>
                </div>
                <MapPin className="text-gold w-8 h-8" />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-bold text-[#86868B] uppercase tracking-widest mb-4">0 to 25 Miles</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-night rounded-3xl text-center">
                      <div className="text-xs font-bold text-[#86868B] mb-2 uppercase">Sedan</div>
                      <div className="text-2xl font-black">{PRICING.dallas_area["0 to 25 miles"].sedan}</div>
                    </div>
                    <div className="p-6 bg-night rounded-3xl text-center border-2 border-gold/20">
                      <div className="text-xs font-bold text-gold mb-2 uppercase">SUV</div>
                      <div className="text-2xl font-black">{PRICING.dallas_area["0 to 25 miles"].suv}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-6 bg-night rounded-3xl">
                  <span className="font-bold text-sm">Above 25 Miles</span>
                  <div className="flex gap-6">
                    <div className="text-right">
                      <div className="text-[10px] font-bold text-[#86868B] uppercase">Sedan</div>
                      <div className="font-black">{PRICING.dallas_area["above 25 miles"].sedan}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-bold text-[#86868B] uppercase">SUV</div>
                      <div className="font-black text-gold">{PRICING.dallas_area["above 25 miles"].suv}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fort Worth Area */}
            <div className="bento-card">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-3xl font-black font-sans">Fort Worth Area</h3>
                  <p className="apple-subtext text-xs uppercase tracking-widest mt-1">Extended Service</p>
                </div>
                <div className="w-12 h-12 bg-accent-violet/10 rounded-2xl flex items-center justify-center text-accent-violet">
                  <Zap className="w-6 h-6" />
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-bold text-[#86868B] uppercase tracking-widest mb-4">0 to 25 Miles</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-night rounded-3xl text-center">
                      <div className="text-xs font-bold text-[#86868B] mb-2 uppercase">Sedan</div>
                      <div className="text-2xl font-black">{PRICING.fortworth_area["0 to 25 miles"].sedan}</div>
                    </div>
                    <div className="p-6 bg-night rounded-3xl text-center">
                      <div className="text-xs font-bold text-[#86868B] mb-2 uppercase">SUV</div>
                      <div className="text-2xl font-black">{PRICING.fortworth_area["0 to 25 miles"].suv}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-6 bg-night rounded-3xl">
                  <span className="font-bold text-sm">Above 25 Miles</span>
                  <div className="flex gap-6">
                    <div className="text-right">
                      <div className="text-[10px] font-bold text-[#86868B] uppercase">Sedan</div>
                      <div className="font-black">{PRICING.fortworth_area["above 25 miles"].sedan}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-bold text-[#86868B] uppercase">SUV</div>
                      <div className="font-black">{PRICING.fortworth_area["above 25 miles"].suv}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Rates & Policy */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bento-card">
              <h3 className="text-xl font-bold mb-4 font-sans">Wait Time</h3>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span className="text-sm apple-subtext font-sans">Sedan</span>
                  <span className="font-bold">{PRICING.wait_time.sedan}</span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span className="text-sm apple-subtext font-sans">SUV</span>
                  <span className="font-bold">{PRICING.wait_time.suv}</span>
                </div>
              </div>
            </div>
            
            <div className="bento-card col-span-1 md:col-span-2">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-sans tracking-tight">Hourly Booking</h3>
                  <p className="text-xs apple-subtext font-sans">{PRICING.hourly_booking.note}</p>
                </div>
                <div className="flex gap-8">
                  <div className="text-center">
                    <div className="text-[10px] font-bold text-[#86868B] mb-1">SEDAN</div>
                    <div className="text-3xl font-black italic text-[#1D1D1F]">{PRICING.hourly_booking.sedan}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] font-bold text-[#86868B] mb-1">SUV</div>
                    <div className="text-3xl font-black italic text-gold">{PRICING.hourly_booking.suv}</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-black/5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#86868B] mb-2 font-sans">Cancellation Policy</p>
                <p className="text-xs font-medium text-[#424245] italic font-sans leading-relaxed">"{PRICING.cancellation_policy}"</p>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Section */}
        <section id="fleet" className="mb-32">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 text-left">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black apple-text mb-6">The Luxury Fleet</h2>
              <p className="apple-subtext text-lg">"We provide premium airport and executive travel with a range of high-end vehicles designed for comfort, space, and style."</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-gold animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest font-sans">Available 24/7</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FLEET.map((vehicle, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="bento-card group"
              >
                <div className="mb-6">
                  <span className="expressive-tag bg-night text-[#1D1D1F] ring-1 ring-black/5">{vehicle.type}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent-blue transition-colors font-sans">{vehicle.name}</h3>
                <p className="text-sm apple-subtext mb-8 font-sans">{vehicle.features}</p>
                
                <div className="mt-auto pt-6 border-t border-black/5 flex items-center justify-between">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-gold text-gold" />)}
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#CBD5E1] group-hover:text-accent-blue group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Drivers Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black apple-text mb-4">Elite Chauffeurs</h2>
            <p className="apple-subtext text-lg">Professional. Respectful. Dedicated to your safety.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-12">
            {DRIVER_PROFILES.map((driver, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center group"
              >
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-gold/10 group-hover:scale-105 mb-8 bg-night border border-black/5">
                  <img 
                    src={driver.image} 
                    alt={driver.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-black apple-text text-[#1D1D1F] mb-2">{driver.name}</h3>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#86868B]">Verified Chauffeur</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Offers Section */}
        <section id="offers" className="mb-32">
          <div className="bento-card bg-black !text-white p-8 md:p-20 relative overflow-hidden">
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[100%] bg-gold/20 blur-[150px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="text-left">
                <h2 className="text-3xl md:text-5xl font-black mb-10 md:mb-12 leading-tight tracking-tight">Exclusive Privileges <br />for our Customers</h2>
                <div className="space-y-6 md:space-y-12">
                  {SPECIAL_OFFERS.map((offer, i) => (
                    <div key={i} className="flex flex-col sm:flex-row gap-4 md:gap-8 group p-6 md:p-0 rounded-[2rem] bg-white/5 md:bg-transparent border border-white/10 md:border-transparent transition-all">
                      <div className="text-5xl md:text-6xl font-black text-gold tracking-tighter group-hover:scale-110 transition-transform shrink-0 leading-none">{offer.title}</div>
                      <div>
                        <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2 font-sans">{offer.subtitle}</h4>
                        <p className="text-sm md:text-base text-white/50 font-medium font-sans leading-relaxed">{offer.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-3xl rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 border border-white/10 text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-3 md:gap-4 font-sans">
                  <Zap className="text-gold w-5 h-5 md:w-6 md:h-6" /> Luxury SUV Service
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {[
                    "Clean & spacious vehicles",
                    "Professional and reliable drivers",
                    "On-time airport pickup & drop-off",
                    "Luggage assistance included",
                    "Perfect for families & business travelers",
                    "DFW & Love Field Airport service"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 md:gap-4 text-xs md:text-sm font-semibold text-white/80 font-sans">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-gold shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={handleCall}
                  className="w-full mt-8 md:mt-12 bg-white text-black py-4 md:py-5 rounded-2xl font-black uppercase text-[10px] md:text-xs tracking-widest shadow-2xl transition-all hover:bg-gold hover:text-white active:scale-95"
                >
                  Book Your Ride Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card bg-white text-center py-24 px-8 border-gold/20 shadow-xl shadow-gold/5"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight text-[#1D1D1F]">
            Luxury Airport Transportation <br />
            Book Your Ride Today
          </h2>
          <p className="text-xl apple-subtext max-w-2xl mx-auto mb-16 font-medium">
            Experience premium airport travel with a clean luxury SUV, professional drivers, and reliable 24/7 service.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={handleCall}
              className="bg-black text-white px-12 py-6 rounded-3xl font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all"
            >
              Reserve Now
            </button>
            <button 
              onClick={handleWhatsApp}
              className="bg-white border border-black/10 text-black px-12 py-6 rounded-3xl font-black text-xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-4"
            >
              <MessageSquare className="w-8 h-8 text-green-500" /> WhatsApp
            </button>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="mt-32 pt-24 pb-12 border-t border-black/5 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 text-left">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-xl border border-black/5 bg-white">
                  <img 
                    src="https://github.com/richdadpoordad78-creator/logo/blob/main/01b83e2a-449e-4ddb-b2ec-7816cbdb2073.jpg?raw=true" 
                    alt="Black Car DFW Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xl font-bold tracking-tight font-sans">Black Car DFW</span>
              </div>
              <p className="apple-subtext text-sm leading-relaxed mb-8">
                "Excellence in executive transportation and airport transfers for over 5 years."
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-night flex items-center justify-center cursor-pointer hover:bg-gold/10 transition-colors">
                  <ShieldCheck className="w-5 h-5 text-gold" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 font-sans">Service Area</h4>
              <ul className="space-y-4 text-sm apple-subtext font-sans">
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Dallas, Texas</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Fort Worth, Texas</li>
                <li className="flex items-center gap-2"><Clock className="w-4 h-4" /> DFW Airport (24/7)</li>
                <li className="flex items-center gap-2"><Clock className="w-4 h-4" /> Love Field (24/7)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 font-sans">Contact</h4>
              <ul className="space-y-4 text-sm apple-subtext font-sans">
                <li className="flex items-center gap-2 font-bold text-black">{CONTACT_INFO.phone}</li>
                <li>{CONTACT_INFO.email[0]}</li>
                <li>{CONTACT_INFO.email[1]}</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 font-sans">Direct Booking</h4>
              <p className="text-xs apple-subtext mb-6 font-sans">Call or message now for fast booking and instant dispatch in Dallas.</p>
              <button 
                onClick={handleCall}
                className="w-full bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-all"
              >
                <Phone className="w-4 h-4" /> Call Dispatch
              </button>
            </div>
          </div>

          <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <p className="text-xs apple-subtext font-sans">© 2026 {CONTACT_INFO.company_name}. Fully Licensed & $1M Commercial Insurance for all passengers. All Rights Reserved.</p>
              <p className="text-[10px] apple-subtext font-sans opacity-60">
                Developed by <a href="https://realamericantechnologies.com/" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:underline underline-offset-2 transition-all">Real American Technologies</a>
              </p>
            </div>
            <div className="flex gap-10">
              <a href="#" className="text-xs apple-subtext hover:text-black font-sans">Privacy Policy</a>
              <a href="#" className="text-xs apple-subtext hover:text-black font-sans">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Call Button for Mobile */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleCall}
        className="fixed bottom-8 right-8 w-16 h-16 bg-black text-white rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center z-[100] lg:hidden"
      >
        <Phone className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
