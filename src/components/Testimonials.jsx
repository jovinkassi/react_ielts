const testimonials = [
    { name: "Aarav", text: "I scored Band 8! The mock tests felt like the real exam." },
    { name: "Meera", text: "The AI feedback was super helpful for improving my writing." },
    { name: "John", text: "Flexible classes fit my work schedule perfectly." }
  ];

  // Color schemes for each card
  const colorSchemes = [
    {
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      hoverOverlay: "from-emerald-50/40 to-teal-50/40",
      quoteColor: "text-emerald-500/15 group-hover:text-emerald-500/25",
      nameColor: "group-hover:text-emerald-600",
      underline: "from-emerald-500 to-teal-500",
      topBorder: "from-emerald-500 via-teal-500 to-emerald-600"
    },
    {
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50",
      hoverOverlay: "from-violet-50/40 to-purple-50/40",
      quoteColor: "text-violet-500/15 group-hover:text-violet-500/25",
      nameColor: "group-hover:text-violet-600",
      underline: "from-violet-500 to-purple-500",
      topBorder: "from-violet-500 via-purple-500 to-violet-600"
    },
    {
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      hoverOverlay: "from-orange-50/40 to-red-50/40",
      quoteColor: "text-orange-500/15 group-hover:text-orange-500/25",
      nameColor: "group-hover:text-orange-600",
      underline: "from-orange-500 to-red-500",
      topBorder: "from-orange-500 via-red-500 to-orange-600"
    }
  ];
  
  export default function Testimonials() {
    return (
      <section id="testimonials" className="px-6 py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-100/30 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-violet-100/30 to-transparent rounded-full translate-y-40 -translate-x-40"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-l from-orange-100/20 to-transparent rounded-full"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-[Tinos] tracking-tight">
              Student Success Stories
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 via-violet-500 to-orange-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
              Real stories from students who achieved their IELTS goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => {
              const colors = colorSchemes[i];
              return (
                <div 
                  key={i} 
                  className={`group relative p-8 bg-gradient-to-br ${colors.bgGradient} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50 overflow-hidden backdrop-blur-sm`}
                >
                  {/* Quote decoration */}
                  <div className={`absolute top-4 left-4 text-6xl ${colors.quoteColor} font-serif transition-colors duration-300`}>
                    "
                  </div>
                  <div className={`absolute bottom-4 right-4 text-6xl ${colors.quoteColor} font-serif rotate-180 transition-colors duration-300`}>
                    "
                  </div>
                  
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.hoverOverlay} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  <div className="relative text-center">
                    {/* Avatar placeholder */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300 shadow-lg ring-4 ring-white/50`}>
                      {t.name.charAt(0)}
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10 group-hover:text-gray-800 transition-colors duration-300 font-medium">
                      "{t.text}"
                    </p>
                    
                    <div className="relative">
                      <h4 className={`font-bold text-xl text-gray-900 ${colors.nameColor} transition-colors duration-300`}>
                        {t.name}
                      </h4>
                      <div className={`w-12 h-0.5 bg-gradient-to-r ${colors.underline} mx-auto mt-2 group-hover:w-20 transition-all duration-300 rounded-full`}></div>
                      
                    </div>
                  </div>
                  
                  {/* Top accent border */}
                  <div className={`absolute top-0 left-0 w-0 h-1 bg-gradient-to-r ${colors.topBorder} group-hover:w-full transition-all duration-500 rounded-full`}></div>
                  
                  {/* Side accent */}
                  <div className={`absolute top-0 right-0 w-1 h-0 bg-gradient-to-b ${colors.gradient} group-hover:h-full transition-all duration-500 rounded-full`}></div>
                </div>
              );
            })}
          </div>
          
          {/* Bottom decorative element */}
          <div className="flex justify-center mt-16">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="w-3 h-3 bg-violet-500 rounded-full animate-pulse shadow-lg" style={{animationDelay: '0.2s'}}></div>
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse shadow-lg" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </section>
    );
  }