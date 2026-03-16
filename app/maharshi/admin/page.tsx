"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Terminal, Globe, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function IsolatedAdminDashboard() {
  const [logs, setLogs] = useState<any[]>([]);
  const [totalVisits, setTotalVisits] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      const { data: statsData } = await supabase
        .from('site_stats').select('count_value').eq('counter_name', 'global_visits').single();
      if (statsData) setTotalVisits(statsData.count_value);

      const { data: logData } = await supabase
        .from('visitor_logs').select('*').order('created_at', { ascending: false }).limit(20);
      if (logData) setLogs(logData);
    };

    fetchStats();

    const channel = supabase.channel('live-analytics')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'visitor_logs' }, () => {
        fetchStats();
      }).subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-mono p-4 md:p-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link href="/maharshi" className="text-[10px] text-slate-600 hover:text-cyan-400 flex items-center gap-2 transition-colors">
            <ArrowLeft size={12} /> BACK_TO_PERSONAL_NODE
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2 bg-white/[0.02] border border-white/10 rounded-xl p-6 flex flex-col justify-center">
            <h1 className="text-xl font-bold text-white flex items-center gap-3">
              <Terminal className="text-cyan-500" size={20} /> ANALYTICS_CONTROL_PLANE
            </h1>
          </div>
          <div className="bg-white/[0.02] border border-cyan-500/30 rounded-xl p-6 text-center">
            <p className="text-[10px] text-cyan-500 uppercase font-bold mb-1">Global_Counter</p>
            <p className="text-4xl font-black text-white">{totalVisits}</p>
          </div>
        </div>

        <div className="bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden">
          <div className="p-4 border-b border-white/5 bg-white/[0.02] flex items-center gap-2 text-[10px] font-bold text-slate-500">
            <Globe size={14} /> LIVE_TRAFFIC_FEED
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[11px]">
              <thead>
                <tr className="border-b border-white/5 text-slate-600">
                  <th className="p-4 font-medium uppercase">Timestamp</th>
                  <th className="p-4 font-medium uppercase">Node_Path</th>
                  <th className="p-4 font-medium uppercase text-right">User_Agent_String</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {logs.map((log: any) => (
                  <tr key={log.id} className="hover:bg-cyan-500/5 transition-colors group">
                    <td className="p-4 font-mono text-cyan-500/70 whitespace-nowrap">
                      {new Date(log.created_at).toLocaleTimeString()}
                    </td>
                    <td className="p-4 text-white">{log.path_visited}</td>
                    <td className="p-4 text-slate-500 text-right truncate max-w-xs">{log.user_agent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
