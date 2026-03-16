"use client";

import React from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';
import { ShieldAlert, Lock, Terminal, ArrowLeft, Network } from 'lucide-react';
import Link from 'next/link';

export default function ResearchNode() {
  useAnalytics('maharshi_research_node');

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans p-4 md:p-8 relative overflow-hidden">
      
      <nav className="max-w-4xl mx-auto mb-12 flex justify-between items-center relative z-20">
        <Link href="/maharshi" className="flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-red-400 transition-colors">
          <ArrowLeft size={14} /> BACK_TO_ROOT_NODE
        </Link>
        <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
          Sector: Breaker_Lab // Clearance: Lvl_5
        </div>
      </nav>

      <main className="max-w-4xl mx-auto relative z-10 space-y-6">
        
        <div className="border-b border-red-500/20 pb-6 mb-8">
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <ShieldAlert className="text-red-500" /> Security Research & Architecture
          </h1>
          <p className="text-slate-400 mt-2 text-sm">Documenting vulnerability mechanics, privilege escalation, and zero-trust infrastructure.</p>
        </div>

        {/* ZERO TRUST ARCHITECTURE */}
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <Network className="text-red-400" size={20} />
            <h2 className="text-xl font-bold text-white">Zero Trust Architecture (ZTA) Implementation</h2>
          </div>
          <p className="text-sm text-slate-400 mb-4 leading-relaxed">
            Currently architecting system boundaries that operate on the "Never Trust, Always Verify" principle. 
            Moving away from traditional perimeter-based VPN models to dynamic, identity-aware micro-segmentation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
             <div className="bg-black/40 p-3 rounded-lg border border-white/5">
               <p className="text-xs font-bold text-white mb-1">Mutual TLS (mTLS)</p>
               <p className="text-[10px] text-slate-500">Cryptographic identity validation for service-to-service communication.</p>
             </div>
             <div className="bg-black/40 p-3 rounded-lg border border-white/5">
               <p className="text-xs font-bold text-white mb-1">Least Privilege Control</p>
               <p className="text-[10px] text-slate-500">Granular IAM policies restricting lateral movement within the network.</p>
             </div>
             <div className="bg-black/40 p-3 rounded-lg border border-white/5">
               <p className="text-xs font-bold text-white mb-1">Continuous Assessment</p>
               <p className="text-[10px] text-slate-500">Evaluating device posture and user context per request, not per session.</p>
             </div>
          </div>
        </div>

        {/* CVE-2021-4034 */}
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="text-red-400" size={20} />
            <h2 className="text-xl font-bold text-white">CVE-2021-4034 (PwnKit) Analysis</h2>
          </div>
          <p className="text-sm text-slate-400 mb-4 leading-relaxed">
            Deep-dive into the memory corruption vulnerability within Polkit's <code className="text-red-400 bg-red-400/10 px-1 rounded">pkexec</code>.
            Analyzed the out-of-bounds write mechanics where an empty argument list (<code className="text-red-400 bg-red-400/10 px-1 rounded">argc=0</code>) forces the program to read from the environment variable array, allowing unprivileged local users to manipulate execution flow and hijack root privileges.
          </p>
        </div>

        {/* OVERTHEWIRE */}
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="text-red-400" size={20} />
            <h2 className="text-xl font-bold text-white">Linux Internals & Escalation</h2>
          </div>
          <p className="text-sm text-slate-400 mb-4 leading-relaxed">
            Practical application of fundamental system penetration via OverTheWire (Bandit). Focus areas include SUID binary exploitation, cron job manipulation, and secure shell (SSH) key mechanics.
          </p>
        </div>

      </main>
    </div>
  );
}