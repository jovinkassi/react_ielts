export default function Footer() {
    return (
      <footer id="contact" className="px-6 py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/5 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-400/10 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left: Branding */}
            <div className="group">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                  <span className="text-white font-bold text-lg">I</span>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent group-hover:from-yellow-300 group-hover:to-white transition-all duration-300">
                  IELTS Pro
                </h2>
              </div>
              <p className="text-blue-100 leading-relaxed max-w-sm group-hover:text-white transition-colors duration-300">
                Helping students achieve their dream band scores with expert guidance and modern tools.
              </p>
              
              {/* Social links placeholder */}
              <div className="flex space-x-4 mt-6">
                <div className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <div className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* Middle: Quick Links */}
            <div className="group">
              <h3 className="text-2xl font-semibold mb-6 font-[Tinos] relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:w-24 transition-all duration-300"></div>
              </h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="#home" 
                    className="text-blue-100 hover:text-white transition-all duration-300 flex items-center group/link"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-3 group-hover/link:bg-yellow-400 group-hover/link:scale-125 transition-all duration-300"></span>
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#features" 
                    className="text-blue-100 hover:text-white transition-all duration-300 flex items-center group/link"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-3 group-hover/link:bg-yellow-400 group-hover/link:scale-125 transition-all duration-300"></span>
                    Features
                  </a>
                </li>
                <li>
                  <a 
                    href="#testimonials" 
                    className="text-blue-100 hover:text-white transition-all duration-300 flex items-center group/link"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-3 group-hover/link:bg-yellow-400 group-hover/link:scale-125 transition-all duration-300"></span>
                    Testimonials
                  </a>
                </li>
                <li>
                  <a 
                    href="#footer" 
                    className="text-blue-100 hover:text-white transition-all duration-300 flex items-center group/link"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-3 group-hover/link:bg-yellow-400 group-hover/link:scale-125 transition-all duration-300"></span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Right: Contact Info */}
            <div className="group">
              <h3 className="text-2xl font-semibold mb-6 font-[Tinos] relative">
                Contact Us
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:w-28 transition-all duration-300"></div>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 group/contact hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center group-hover/contact:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <span className="text-blue-100 group-hover/contact:text-white transition-colors duration-300">
                      123 Learning Street, Kochi, India
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group/contact hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center group-hover/contact:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <span className="text-blue-100 group-hover/contact:text-white transition-colors duration-300">
                      +91 99777 XXXXX
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group/contact hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center group-hover/contact:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <span className="text-blue-100 group-hover/contact:text-white transition-colors duration-300">
                      support@ieltspro.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div className="text-center mt-16 pt-8 border-t border-blue-400/30 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-px">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            </div>
            <p className="text-blue-200 text-sm">
              © {new Date().getFullYear()} IELTS Pro. All rights reserved.
            </p>
            <div className="flex justify-center mt-4 space-x-1">
              <div className="w-1 h-1 bg-blue-300 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
              <div className="w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
            </div>
          </div>
        </div>
      </footer>
    );
  }