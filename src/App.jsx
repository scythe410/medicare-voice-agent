import React, { useEffect } from 'react';
import { Settings, Clock, MapPin, Phone, Calendar, User, ArrowRight, Activity, ShieldPlus } from 'lucide-react';

function App() {
   useEffect(() => {
      const script = document.createElement('script');
      script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
      script.async = true;
      script.type = "text/javascript";
      document.body.appendChild(script);

      // Shadow DOM Hacking to remove branding
      const checkAndHideBranding = setInterval(() => {
         const widget = document.querySelector('elevenlabs-convai');
         if (widget && widget.shadowRoot) {

            const style = document.createElement('style');
            style.textContent = `
               p.whitespace-nowrap, a[href*="elevenlabs.io"] {
                  display: none !important;
                  opacity: 0 !important;
                  pointer-events: none !important;
               }
            `;
            // Avoid duplicate styles
            if (!widget.shadowRoot.querySelector('style[data-hide-branding]')) {
               style.setAttribute('data-hide-branding', 'true');
               widget.shadowRoot.appendChild(style);
            }

            // 2. Direct DOM manipulation as backup
            const paragraphs = widget.shadowRoot.querySelectorAll('p');
            paragraphs.forEach(p => {
               if (p.textContent.includes('Powered by') || p.textContent.includes('ElevenLabs')) {
                  p.style.display = 'none';
               }
            });
         }
      }, 500); // Check every 500ms

      return () => {
         document.body.removeChild(script);
         clearInterval(checkAndHideBranding);
      }
   }, []);

   return (
      <div className="min-h-screen font-sans text-slate-800 selection:bg-blue-200 flex flex-col">

         {/* Background Orbs (Fixed) */}
         <div className="fixed top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
         <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-400/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

         {/* Content Wrapper to push Footer down */}
         <div className="flex-1 relative">
            {/* Navigation */}
            <nav className="relative z-10 px-6 py-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
               <div className="flex items-center gap-2">
                  <img src="/self-love.svg" alt="Logo" className="w-8 h-8 object-contain" />
                  <span className="text-xl font-semibold tracking-tight text-slate-800">Medicare</span>
               </div>
               <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
                  <a href="#" className="hover:text-blue-600 transition">Doctors</a>
                  <a href="#" className="hover:text-blue-600 transition">Services</a>
                  <a href="#" className="hover:text-blue-600 transition">Schedule</a>
               </div>
               <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/50 hover:bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold transition border border-white/60 shadow-sm text-slate-700">
                  <Phone size={16} />
                  <span>Emergency: 911</span>
               </button>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-8 md:pt-16 pb-20">

               <div className="grid md:grid-cols-2 gap-12 items-center">

                  {/* Left Column: Text & Booking Info */}
                  <div className="space-y-8">

                     <h1 className="text-4xl md:text-6xl font-medium leading-tight text-slate-900">
                        Modern Healthcare <br />
                        <span className="text-5xl md:text-7xl text-blue-600 font-script font-normal block mt-2">
                           Simplified.
                        </span>
                     </h1>

                     <p className="text-lg text-slate-600 font-light leading-relaxed max-w-lg">
                        Experience the future of family medicine. Book appointments precisely when you need them with our AI-powered scheduling assistant.
                     </p>

                     <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <div className="flex-1 bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-sm flex items-center gap-4">
                           <img
                              src="/dr-neilia.png"
                              alt="Dr. Neilia"
                              className="w-12 h-12 rounded-full object-cover ring-2 ring-white"
                           />
                           <div>
                              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Available Today</p>
                              <p className="text-slate-800 font-medium">Dr. Neilia De Silva</p>
                           </div>
                        </div>

                        <div className="flex-1 bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-sm flex items-center gap-4">
                           <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                              <Clock size={24} />
                           </div>
                           <div>
                              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Opening Hours</p>
                              <p className="text-slate-800 font-medium">8:00 AM - 11:00 PM</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Right Column: The "Agent" Card */}
                  <div className="relative z-20">
                     {/* Glass Card Container for Widget - Removed overflow-hidden to fix popup clipping */}
                     <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[40px] p-8 shadow-2xl relative group hover:bg-white/50 transition duration-500">

                        <div className="flex justify-between items-start mb-8">
                           <div>
                              <h2 className="text-2xl font-semibold text-slate-800">Talk to Dahlia</h2>
                              <p className="text-slate-600">Our AI Receptionist</p>
                           </div>
                        </div>

                        <div className="space-y-4">
                           <div className="flex items-center gap-3 text-sm text-slate-600 bg-white/40 p-4 rounded-2xl border border-white/40">
                              <User size={18} className="text-blue-600" />
                              <span className="font-medium">Check Doctor Availability</span>
                           </div>
                           <div className="flex items-center gap-3 text-sm text-slate-600 bg-white/40 p-4 rounded-2xl border border-white/40">
                              <Calendar size={18} className="text-blue-600" />
                              <span className="font-medium">Book Appointments Instantly</span>
                           </div>
                           <div className="flex items-center gap-3 text-sm text-slate-600 bg-white/40 p-4 rounded-2xl border border-white/40">
                              <Clock size={18} className="text-blue-600" />
                              <span className="font-medium">Get Clinic Opening Hours</span>
                           </div>
                           <div className="flex items-center gap-3 text-sm text-slate-600 bg-white/40 p-4 rounded-2xl border border-white/40">
                              <Activity size={18} className="text-blue-600" />
                              <span className="font-medium">General Inquiries & FAQs</span>
                           </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/40">
                           <p className="text-xs text-slate-500 leading-relaxed text-center">
                              "Dahlia can handle multiple queries at once, ensuring you never have to wait on hold."
                           </p>
                        </div>
                     </div>
                  </div>

               </div>

               {/* Feature Grid (Bottom) */}
               <div className="grid md:grid-cols-3 gap-6 mt-20">
                  <div className="bg-white/40 backdrop-blur-md p-6 rounded-3xl border border-white/50 shadow-sm hover:shadow-md transition">
                     <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                        <MapPin size={20} />
                     </div>
                     <h3 className="font-semibold text-slate-800 mb-2">Central Location</h3>
                     <p className="text-sm text-slate-600">23 Desmond Avenue, Colombo 03<br />Parking Available.</p>
                  </div>

                  <div className="bg-white/40 backdrop-blur-md p-6 rounded-3xl border border-white/50 shadow-sm hover:shadow-md transition">
                     <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4">
                        <ShieldPlus size={20} />
                     </div>
                     <h3 className="font-semibold text-slate-800 mb-2">Insurance Accepted</h3>
                     <p className="text-sm text-slate-600">We accept all major isurances. Direct billing available.</p>
                  </div>

                  <div className="bg-white/40 backdrop-blur-md p-6 rounded-3xl border border-white/50 shadow-sm hover:shadow-md transition">
                     <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4">
                        <Clock size={20} />
                     </div>
                     <h3 className="font-semibold text-slate-800 mb-2">Zero Wait Times</h3>
                     <p className="text-sm text-slate-600">Our AI booking ensures gaps between appointments are optimized.</p>
                  </div>
               </div>

            </main>

            {/* Sticky Widget Wrapper */}
            <div className="sticky bottom-6 z-50 flex justify-end px-6 pointer-events-none w-full">
               <div className="pointer-events-auto">
                  <elevenlabs-convai agent-id="agent_9601kc17p3tse08t7ygb2p0b4ygm"></elevenlabs-convai>
               </div>
            </div>
         </div>

         <footer className="w-full bg-slate-900 py-6 mt-12 relative z-10">
            <div className="max-w-7xl mx-auto px-6 text-center">
               <p className="text-slate-400 text-sm font-medium">© Demo By R.</p>
            </div>
         </footer>
      </div>
   );
}

export default App;
