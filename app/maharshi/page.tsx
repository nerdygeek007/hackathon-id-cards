"use client";

import React from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';
import { Github, ExternalLink, ShieldCheck, Database, Code2, Cpu, GraduationCap, Home, Lock, Server, Activity } from 'lucide-react';
import Link from 'next/link';

export default function MaharshiPortfolio() {
  useAnalytics('maharshi_personal_node');
  
  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans p-4 md:p-8 relative overflow-hidden selection:bg-cyan-500/30">
      
      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="max-w-6xl mx-auto mb-8 flex justify-between items-center relative z-20">
        <Link href="/" className="flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors">
          <Home size={14} /> BACK_TO_TVA_TERMINAL
        </Link>
        <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
          Auth: Maharshi_Trivedi // Node_01
        </div>
      </nav>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
        
        {/* ROW 1: HERO & PROFILE */}
        <div className="md:col-span-3 bg-white/[0.03] border border-white/10 rounded-3xl p-8 flex flex-col justify-center backdrop-blur-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-400 mb-6 w-fit">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            SYSTEMS BREAKER–BUILDER
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Maharshi <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Trivedi</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Computer Engineering at <span className="text-white">CHARUSAT</span>. 
            Designing secure backend infrastructures and identifying trust boundaries within complex systems.
          </p>
        </div>

        <div className="md:col-span-1 bg-white/[0.03] border border-white/10 rounded-3xl p-4 backdrop-blur-xl group overflow-hidden">
          <img 
            src="https://github.com/nerdygeek007.png" 
            alt="Maharshi" 
            className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* ROW 2: STACK, PROMPTFORGE, EDUCATION */}
        <div className="md:col-span-1 bg-white/[0.03] border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
          <h3 className="text-white font-bold text-lg mb-6">Stack</h3>
          <div className="space-y-5">
            {[
              { icon: <Code2 size={18}/>, label: "Backend", val: "Node.js, Express", color: "text-cyan-400" },
              { icon: <Database size={18}/>, label: "Database", val: "Supabase, SQL", color: "text-purple-400" },
              { icon: <Cpu size={18}/>, label: "Blockchain", val: "Ethereum, Solidity", color: "text-orange-400" },
              { icon: <Github size={18}/>, label: "DevOps", val: "GitHub Actions", color: "text-blue-400" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={`p-2 bg-white/5 rounded-lg ${item.color}`}>{item.icon}</div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500">{item.label}</p>
                  <p className="text-sm text-white font-medium">{item.val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- WIRED LINK 1: PROJECTS NODE --- */}
        <Link href="/maharshi/projects" className="md:col-span-2 block cursor-pointer group">
          <div className="bg-gradient-to-br from-cyan-950/20 to-black border border-cyan-500/20 rounded-3xl p-6 backdrop-blur-xl h-full relative transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <div className="flex justify-between items-start mb-4">
              <ShieldCheck className="text-cyan-400" size={28} />
              <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">PromptForge & Active Builds</h3>
            <p className="text-sm text-slate-400 mb-6">
              Hackathon 2026 Core Project. AI-driven compliance platform for generating secure, rootless Podman microservices via Gemini API. Click to view all active system deployments.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "Gemini AI", "Podman", "Supabase"].map(tag => (
                <span key={tag} className="text-[10px] px-2 py-1 bg-white/5 rounded-md border border-white/10 uppercase tracking-tighter">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>

        <div className="md:col-span-1 bg-white/[0.03] border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
          <GraduationCap className="text-cyan-400 mb-4" size={28} />
          <h3 className="text-white font-bold text-lg mb-1">Education</h3>
          <p className="text-xs text-slate-500 mb-4">DEPSTAR, CHARUSAT</p>
          <div className="p-3 bg-white/5 rounded-xl border border-white/5">
             <p className="text-[10px] text-cyan-400 font-mono mb-1">CURRENT_ENROLLMENT</p>
             <p className="text-xs text-white">B.Tech Computer Engineering</p>
             <p className="text-[10px] text-slate-500 mt-2 italic">Lateral Entry // Anand, Gujarat</p>
          </div>
        </div>

        {/* --- WIRED LINK 2: RESEARCH NODE --- */}
        <Link href="/maharshi/research" className="md:col-span-2 block cursor-pointer group">
          <div className="bg-gradient-to-br from-red-950/10 to-transparent border border-red-500/10 rounded-3xl p-6 backdrop-blur-xl h-full transition-all duration-300 hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)]">
            <div className="flex items-center justify-between mb-6">
               <div className="flex items-center gap-3">
                 <Lock className="text-red-500" size={24} />
                 <h3 className="text-white font-bold text-lg group-hover:text-red-400 transition-colors">Security Research Lab</h3>
               </div>
               <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-red-500" />
            </div>
            <div className="space-y-4">
               <div className="p-4 bg-black/40 border-l-2 border-red-500 rounded-r-lg">
                  <p className="text-sm text-white font-bold mb-1">CVE-2021-4034 (PwnKit)</p>
                  <p className="text-xs text-slate-500">Local Privilege Escalation vulnerability analysis and exploitation mechanics.</p>
               </div>
               <div className="p-4 bg-black/40 border-l-2 border-red-500 rounded-r-lg">
                  <p className="text-sm text-white font-bold mb-1">Zero Trust & Linux Internals</p>
                  <p className="text-xs text-slate-500">Advanced CLI manipulation, ZTA implementation, and fundamental system penetration.</p>
               </div>
            </div>
          </div>
        </Link>

        {/* ROW 3: INFRASTRUCTURE */}
        <div className="md:col-span-2 bg-white/[0.03] border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-blue-500/30 transition-colors">
          <div className="flex items-center gap-3 mb-6">
             <Server className="text-blue-400" size={24} />
             <h3 className="text-white font-bold text-lg">Infrastructure & Cloud</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <p className="text-xs text-blue-400 font-mono mb-2">CONTAINERIZATION</p>
              <p className="text-sm text-white font-bold">Rootless Podman</p>
              <p className="text-[10px] text-slate-500 mt-1">Daemonless isolation</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <p className="text-xs text-blue-400 font-mono mb-2">ORCHESTRATION</p>
              <p className="text-sm text-white font-bold">Red Hat OpenShift</p>
              <p className="text-[10px] text-slate-500 mt-1">Cloud-native deployment</p>
            </div>
          </div>
        </div>

        {/* ROW 4: ACTIVITY, COGNITIVE PROFILE, CONTACT */}
        <div className="md:col-span-2 bg-white/[0.03] border border-white/10 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-center group">
           <h3 className="text-white font-bold mb-2">Decentralized Document Verification</h3>
           <p className="text-xs text-slate-500 mb-4">Developing Ethereum-based immutable record systems for academic credentials.</p>
           <div className="flex gap-2 text-xs font-mono">
              <span className="text-purple-400">SOLIDITY</span>
              <span className="text-slate-600">//</span>
              <span className="text-orange-400">WEB3.JS</span>
           </div>
        </div>

        <div className="md:col-span-1 bg-white/[0.03] border border-white/10 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-center">
           <div className="flex items-center gap-2 mb-4">
             <Activity className="text-cyan-500" size={16} />
             <h3 className="text-white font-bold text-sm">Cognitive Load</h3>
           </div>
           <div className="space-y-4">
              <div>
                 <div className="flex justify-between text-[10px] mb-1 font-bold"><span>BUILDER</span><span className="text-cyan-500">65%</span></div>
                 <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden"><div className="bg-cyan-500 h-full w-[65%]"></div></div>
              </div>
              <div>
                 <div className="flex justify-between text-[10px] mb-1 font-bold"><span>RESEARCHER</span><span className="text-red-500">35%</span></div>
                 <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden"><div className="bg-red-500 h-full w-[35%]"></div></div>
              </div>
           </div>
        </div>

        <div className="md:col-span-1 bg-cyan-500 hover:bg-cyan-400 transition-colors rounded-3xl p-6 flex flex-col items-center justify-center text-black font-bold cursor-pointer group">
           <a href="mailto:trivedimaharshim@gmail.com" className="flex flex-col items-center gap-2 text-center w-full">
              <ExternalLink size={24} className="group-hover:scale-110 transition-transform mb-2" />
              <span className="uppercase tracking-tighter leading-tight">Initiate<br/>Protocol</span>
           </a>
        </div>

      </main>

      <footer className="max-w-6xl mx-auto mt-12 mb-8 text-center text-slate-700 text-[10px] font-mono tracking-[0.2em] uppercase">
        © 2026 Maharshi Trivedi // Built with Next.js & Tailwind
      </footer>
    </div>
  );
}