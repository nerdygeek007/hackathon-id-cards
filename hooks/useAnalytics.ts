"use client";

import { useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';

export const useAnalytics = (path: string) => {
  const supabase = createClient();

  useEffect(() => {
    const logVisit = async () => {
      await supabase.rpc('increment_visit_count'); 
      await supabase.from('visitor_logs').insert([
        { path_visited: path, user_agent: navigator.userAgent }
      ]);
    };
    logVisit();
  }, [path]);
};