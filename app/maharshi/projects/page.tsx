"use client";

import React from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';
import { Blocks, ArrowLeft, Cpu, FileJson, ShieldCheck, Users, CalendarClock } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsNode() {
  useAnalytics('maharshi_projects_node');

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans p-4 md:p-8 relative overflow-hidden">
      
      <nav className="max-w-4xl mx-auto mb-12 flex justify-between items-center relative z-20">
        <Link href="/maharshi" className="flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors">
          <ArrowLeft size={14} /> BACK_TO_ROOT_NODE
        </Link>
        <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
          Sector: Builder_Lab // Clearance: Lvl_5
        </div>
      </nav>

      <main className="max-w-4xl mx-auto relative z-10 space-y-6">
        
        <div className="border-b border-cyan-500/20 pb-6 mb-8">
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Blocks className="text-cyan-500" /> Active System Deployments
          </h1>
          <p className="text-slate-400 mt-2 text-sm">Engineering secure architectures, AI integrations, and immutable systems.</p>
        </div>

        {/* PROMPTFORGE (HACKATHON) */}
        <div className="bg-gradient-to-br from-cyan-950/20 to-black border border-cyan-500/30 rounded-2xl p-6 relative group">
          <div className="absolute top-6 right-6 px-2 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold tracking-wider rounded border border-cyan-500/20 uppercase">
            Hackathon 2026 Core
          </div>
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="text-cyan-400" size={20} />
            <h2 className="text-xl font-bold text-white">PromptForge</h2>
          </div>
          <p className="text-sm text-slate-400 mb-4 leading-relaxed pr-24">
            An AI-driven compliance platform engineered to generate secure, rootless Podman microservices. 
            Leveraging the Gemini API for intelligent container definition while enforcing strict daemonless isolation at the OS level.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Next.js", "Gemini API", "Podman", "Supabase PostgreSQL"].map(tag => (
              <span key={tag} className="text-[10px] px-2 py-1 bg-white/5 rounded-md border border-white/10 uppercase tracking-tighter">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* DECENTRALIZED DOCS */}
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <FileJson className="text-cyan-400" size={20} />
            <h2 className="text-xl font-bold text-white">Decentralized Digital Document Verification</h2>
          </div>
          <p className="text-sm text-slate-400 mb-4 leading-relaxed">
            Lead Backend Architect for an Ethereum-based immutable record system. Designed to cryptographically verify academic and professional credentials without relying on a centralized database authority.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Ethereum", "Solidity", "Web3.js", "Node.js"].map(tag => (
              <span key={tag} className="text-[10px] px-2 py-1 bg-white/5 rounded-md border border-white/10 uppercase tracking-tighter">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CHRONOSYNC (TIMETABLE) */}
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-colors relative">
           <div className="absolute top-6 right-6 px-2 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold tracking-wider rounded border border-blue-500/20 uppercase">
            Ongoing Build
          </div>
          <div className="flex items-center gap-3 mb-4">
            <CalendarClock className="text-blue-400" size={20} />
            <h2 className="text-xl font-bold text-white">ChronoSync // Algorithmic Scheduling Engine</h2>
          </div>
          <p className="text-sm text-slate-400 mb-4 leading-relaxed pr-24">
            Architecting a constraint-satisfaction engine to automate university academic scheduling. Designed to computationally resolve complex spatio-temporal conflicts between faculty availability, physical lab resources, and overlapping student batches.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Node.js", "Express", "PostgreSQL", "React"].map(tag => (
              <span key={tag} className="text-[10px] px-2 py-1 bg-white/5 rounded-md border border-white/10 uppercase tracking-tighter">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* NEXUS (CLUB MANAGEMENT) */}
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-colors relative">
          <div className="absolute top-6 right-6 px-2 py-1 bg-purple-500/10 text-purple-400 text-[10px] font-bold tracking-wider rounded border border-purple-500/20 uppercase">
            Ongoing Build
          </div>
          <div className="flex items-center gap-3 mb-4">
            <Users className="text-purple-400" size={20} />
            <h2 className="text-xl font-bold text-white">Nexus // Entity Access & Management</h2>
          </div>
          <p className="text-sm text-slate-400 mb-4 leading-relaxed pr-24">
            Developing a centralized platform for campus organizations. Features deep Role-Based Access Control (RBAC) to securely manage event pipelines, financial ledgers, and hierarchical student authorizations across multiple college entities.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Next.js", "Supabase Auth", "Tailwind CSS", "TypeScript"].map(tag => (
              <span key={tag} className="text-[10px] px-2 py-1 bg-white/5 rounded-md border border-white/10 uppercase tracking-tighter">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* SECURE FILE ENCRYPTION */}
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="text-green-400" size={20} />
            <h2 className="text-xl font-bold text-white">Secure File Encryption Engine</h2>
          </div>
          <p className="text-sm text-slate-400 mb-4 leading-relaxed">
            Applied cryptography project focused on secure data transit and storage. Implemented robust encryption algorithms to ensure data confidentiality and integrity across untrusted boundaries.
          </p>
        </div>

      </main>
    </div>
  );
}