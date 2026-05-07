'use client';

import { Skill, SkillStatus } from '@/types';
import { useProgress } from '@/context/ProgressContext';

interface Props {
  skills: Skill[];
}

export function StatsBar({ skills }: Props) {
  const { getSkillProgress } = useProgress();

  const counts = skills.reduce<Record<SkillStatus, number>>(
    (acc, s) => {
      const status = getSkillProgress(s.id).status;
      acc[status]++;
      return acc;
    },
    { 'not-started': 0, 'in-progress': 0, 'completed': 0 }
  );

  const total = skills.length;
  const completedPct = total ? Math.round((counts['completed'] / total) * 100) : 0;
  const inProgressPct = total ? Math.round((counts['in-progress'] / total) * 100) : 0;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6 shadow-sm">
      <div className="flex flex-wrap gap-6 mb-4">
        <Stat label="Total Skills" value={total} color="text-gray-800" />
        <Stat label="Completed" value={counts['completed']} color="text-emerald-600" />
        <Stat label="In Progress" value={counts['in-progress']} color="text-amber-600" />
        <Stat label="Not Started" value={counts['not-started']} color="text-gray-400" />
        <Stat label="Overall Progress" value={`${completedPct}%`} color="text-blue-600" />
      </div>
      <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
        <div className="h-full flex">
          <div
            className="bg-emerald-500 transition-all duration-500"
            style={{ width: `${completedPct}%` }}
          />
          <div
            className="bg-amber-400 transition-all duration-500"
            style={{ width: `${inProgressPct}%` }}
          />
        </div>
      </div>
      <div className="flex gap-4 mt-2 text-xs text-gray-500">
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> Completed</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400 inline-block" /> In Progress</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-300 inline-block" /> Not Started</span>
      </div>
    </div>
  );
}

function Stat({ label, value, color }: { label: string; value: string | number; color: string }) {
  return (
    <div>
      <div className={`text-2xl font-bold ${color}`}>{value}</div>
      <div className="text-xs text-gray-500 mt-0.5">{label}</div>
    </div>
  );
}
