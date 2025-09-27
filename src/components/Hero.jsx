import heroImage from "../assets/ielts.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center px-6 py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 gap-12 md:gap-16 relative overflow-hidden min-h-screen"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/20 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-200/20 to-transparent rounded-full translate-y-40 -translate-x-40"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-100/10 to-blue-100/10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 relative z-10">
        {/* Content Section */}
        <div className="md:w-1/2 space-y-8 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 font-[Tinos] leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Crack IELTS
            </span>
            <br />
            <span className="text-gray-800">
              with Confidence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
            Personalized training, AI-powered feedback, and mock tests to boost
            your band score.
          </p>
          
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get Started
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
        
        {/* Image Section */}
        <div className="md:w-1/2 relative group">
          {/* Decorative frame */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
          
          {/* Main image container */}
          <div className="relative bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/50 p-4 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/50">
            <img
              src={heroImage}
              alt="Students learning"
              className="rounded-xl shadow-lg w-full h-auto group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}