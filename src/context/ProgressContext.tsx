'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ProgressMap, SkillProgress, SkillStatus } from '@/types';

const STORAGE_KEY = 'js-tracker-progress';

interface ProgressContextValue {
  progress: ProgressMap;
  updateStatus: (skillId: string, status: SkillStatus) => void;
  updateNotes: (skillId: string, notes: string) => void;
  getSkillProgress: (skillId: string) => SkillProgress;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

const defaultProgress = (): SkillProgress => ({ status: 'not-started', notes: '' });

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<ProgressMap>({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setProgress(JSON.parse(stored));
    } catch {}
  }, []);

  const save = (next: ProgressMap) => {
    setProgress(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
  };

  const updateStatus = (skillId: string, status: SkillStatus) => {
    save({ ...progress, [skillId]: { ...getSkillProgress(skillId), status } });
  };

  const updateNotes = (skillId: string, notes: string) => {
    save({ ...progress, [skillId]: { ...getSkillProgress(skillId), notes } });
  };

  const getSkillProgress = (skillId: string): SkillProgress =>
    progress[skillId] ?? defaultProgress();

  return (
    <ProgressContext.Provider value={{ progress, updateStatus, updateNotes, getSkillProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
