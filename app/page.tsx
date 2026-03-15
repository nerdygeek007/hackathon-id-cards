import React from 'react';

export default function ModernTVATerminal() {
  return (
    <div className="min-h-screen bg-black text-slate-300 font-sans p-8 relative overflow-hidden flex flex-col items-center justify-center selection:bg-cyan-500/30">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none"></div>

      {/* Header */}
      <div className="text-center mb-16 z-10 w-full max-w-4xl flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-cyan-400 mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          TVA SECURE NETWORK ESTABLISHED
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
          PROJECT: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">PROMPTFORGE</span>
        </h1>
        <p className="text-slate-400 max-w-lg">
          Sacred Timeline Infrastructure Access. Select an operative to initiate portfolio redirect.
        </p>
      </div>

      {/* ID Cards Container */}
      <div className="flex flex-col md:flex-row gap-6 z-10 w-full max-w-4xl justify-center">
        
        {/* Card 1: Maharshi */}
        <a 
          href="https://your-actual-portfolio-link.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative w-full md:w-1/2 bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.05] hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] overflow-hidden flex flex-col justify-between"
        >
          {/* Top Section */}
          <div>
            <div className="flex justify-between items-start mb-6">
              <img 
                src="https://github.com/nerdygeek007.png" 
                alt="Maharshi Trivedi" 
                className="w-16 h-16 rounded-full border border-white/20 group-hover:border-cyan-400/50 transition-colors"
              />
              <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold tracking-wider rounded border border-cyan-500/20 uppercase">
                Lvl 5 Clearance
              </span>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-1">Maharshi Trivedi</h2>
            <p className="text-cyan-400 text-sm font-medium mb-6">Lead Architect // Backend & AI</p>
            
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>ID Node</span>
                <span className="text-white font-mono">D25DCE167</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Sector</span>
                <span className="text-white">CHARUSAT</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>GitHub</span>
                <a href="https://github.com/nerdygeek007" target="_blank" rel="noopener noreferrer" className="text-white">@nerdygeek007</a>
              </div>
            </div>
          </div>

          {/* Bottom Button Action */}
          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-sm font-medium text-slate-400 group-hover:text-cyan-400 transition-colors">
            <span>View Portfolio</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </a>

        {/* Card 2: Teammate */}
        <a 
          href="https://bright-marigold-ba591b.netlify.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative w-full md:w-1/2 bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.05] hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] overflow-hidden flex flex-col justify-between"
        >
          {/* Top Section */}
          <div>
            <div className="flex justify-between items-start mb-6">
              <img 
                src="https://github.com/chaitany851P.png" 
                alt="Chaitanya Thakar" 
                className="w-16 h-16 rounded-full border border-white/20 group-hover:border-purple-400/50 transition-colors"
              />
              <span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-[10px] font-bold tracking-wider rounded border border-purple-500/20 uppercase">
                Lvl 5 Clearance
              </span>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-1">Chaitanya Thakar</h2>
            <p className="text-purple-400 text-sm font-medium mb-6">Full-Stack Engineer</p>
            
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>ID Node</span>
                <span className="text-white font-mono">D25DCE169</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Sector</span>
                <span className="text-white">CHARUSAT</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>GitHub</span>
                <a href="https://github.com/chaitany851P" target="_blank" rel="noopener noreferrer" className="text-white">@chaitany851P</a>
              </div>
            </div>
          </div>

          {/* Bottom Button Action */}
          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-sm font-medium text-slate-400 group-hover:text-purple-400 transition-colors">
            <span>View Portfolio</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </a>

      </div>
    </div>
  );
}