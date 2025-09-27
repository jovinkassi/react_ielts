const features = [
    { title: "Speaking Practice", desc: "One-on-one sessions with mentors." },
    { title: "Mock Tests", desc: "Real exam experience with instant results." },
    { title: "AI Band Score", desc: "Smart evaluation with AI insights." },
    { title: "Flexible Schedules", desc: "Learn at your own pace." }
  ];
  
  export default function Features() {
    return (
      <section id="features" className="px-6 py-20 bg-gradient-to-br from-purple-50 via-violet-50/50 to-fuchsia-50/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-transparent rounded-full -translate-y-48 -translate-x-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-violet-200/20 to-transparent rounded-full translate-y-40 translate-x-40"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-fuchsia-100/10 to-purple-100/10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-[Tinos] tracking-tight">
              Features
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
              Discover the powerful tools that make learning IELTS effective and engaging
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div 
                key={i} 
                className="group relative p-8 bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-white transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon placeholder with gradient background */}
                <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-lg opacity-90 group-hover:rotate-12 transition-transform duration-300"></div>
                </div>
                
                <h3 className="relative text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="relative text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {f.desc}
                </p>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-violet-600 group-hover:w-full transition-all duration-500"></div>
                
                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-purple-500/10 group-hover:border-t-purple-500/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }