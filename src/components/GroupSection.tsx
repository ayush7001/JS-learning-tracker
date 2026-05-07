'use client';

import { useState } from 'react';
import { Skill, LevelKey, SkillStatus } from '@/types';
import { useProgress } from '@/context/ProgressContext';
import { SkillCard } from './SkillCard';

interface Props {
  group: string;
  skills: Skill[];
  focusLevel: LevelKey;
}

export function GroupSection({ group, skills, focusLevel }: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const { getSkillProgress } = useProgress();

  const counts = skills.reduce<Record<SkillStatus, number>>(
    (acc, s) => {
      acc[getSkillProgress(s.id).status]++;
      return acc;
    },
    { 'not-started': 0, 'in-progress': 0, 'completed': 0 }
  );

  const pct = skills.length ? Math.round((counts.completed / skills.length) * 100) : 0;

  return (
    <div className="mb-8">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="w-full flex items-center justify-between mb-3 group"
      >
        <div className="flex items-center gap-3">
          <h2 className="text-base font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
            {collapsed ? '▶' : '▼'} {group}
          </h2>
          <span className="text-xs text-gray-400">{skills.length} skills</span>
          <div className="flex gap-1.5 text-xs">
            {counts.completed > 0 && <span className="text-emerald-600 font-medium">{counts.completed} done</span>}
            {counts['in-progress'] > 0 && <span className="text-amber-600 font-medium">{counts['in-progress']} in progress</span>}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-24 bg-gray-100 rounded-full h-2 overflow-hidden">
            <div className="bg-emerald-500 h-full transition-all duration-500" style={{ width: `${pct}%` }} />
          </div>
          <span className="text-xs font-semibold text-gray-500 w-8 text-right">{pct}%</span>
        </div>
      </button>

      {!collapsed && (
        <div className="grid gap-3">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} focusLevel={focusLevel} />
          ))}
        </div>
      )}
    </div>
  );
}
