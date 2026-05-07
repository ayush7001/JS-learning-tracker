'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { skills, skillGroups } from '@/data/skills';
import { LevelKey, SkillStatus } from '@/types';
import { StatsBar } from '@/components/StatsBar';
import { GroupSection } from '@/components/GroupSection';
import { useProgress } from '@/context/ProgressContext';

const STATUS_FILTERS: { label: string; value: 'all' | SkillStatus }[] = [
  { label: 'All', value: 'all' },
  { label: 'Not Started', value: 'not-started' },
  { label: 'In Progress', value: 'in-progress' },
  { label: 'Completed', value: 'completed' },
];

export default function Home() {
  const { getSkillProgress } = useProgress();
  const [focusLevel] = useState<LevelKey>('A3');
  const [activeGroup, setActiveGroup] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<'all' | SkillStatus>('all');
  const [search, setSearch] = useState('');

  const filteredSkills = useMemo(() => {
    return skills.filter((s) => {
      if (activeGroup !== 'All' && s.group !== activeGroup) return false;
      if (statusFilter !== 'all' && getSkillProgress(s.id).status !== statusFilter) return false;
      if (search && !s.name.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [activeGroup, statusFilter, search, getSkillProgress]);

  const groupedSkills = useMemo(() => {
    const map: Record<string, typeof skills> = {};
    filteredSkills.forEach((s) => {
      if (!map[s.group]) map[s.group] = [];
      map[s.group].push(s);
    });
    return map;
  }, [filteredSkills]);

  const visibleGroups = skillGroups.filter((g) => groupedSkills[g]?.length > 0);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                JavaScript (Frontend) — A3 Exam Prep
              </h1>
              <p className="text-sm text-gray-500 mt-0.5">
                Current role: <span className="font-semibold text-violet-600">A2 Software Engineer</span>
                {' → '}Target: <span className="font-semibold text-blue-600">A3 Senior Software Engineer</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-xs text-gray-500 bg-blue-50 border border-blue-100 rounded-lg px-3 py-1.5">
                <span className="font-semibold text-blue-700">49 skills</span> across 7 groups
              </div>
              <Link
                href="/plan"
                className="text-xs px-3 py-1.5 rounded-lg border border-blue-200 bg-blue-600 text-white hover:bg-blue-700 font-medium transition-colors"
              >
                View 3-Month Plan
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <StatsBar skills={skills} />

        <div className="flex flex-wrap gap-3 mb-5">
          <input
            type="search"
            placeholder="Search skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-2 w-52 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
          <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-1">
            {STATUS_FILTERS.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setStatusFilter(value)}
                className={`text-xs px-3 py-1.5 rounded-md font-medium transition-colors ${
                  statusFilter === value
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {['All', ...skillGroups].map((g) => {
            const count = g === 'All' ? filteredSkills.length : (groupedSkills[g]?.length ?? 0);
            return (
              <button
                key={g}
                onClick={() => setActiveGroup(g)}
                className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-colors ${
                  activeGroup === g
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600'
                }`}
              >
                {g} {count > 0 && <span className="opacity-70">({count})</span>}
              </button>
            );
          })}
        </div>

        {visibleGroups.length === 0 ? (
          <div className="text-center text-gray-400 py-20 text-sm">No skills match your filters.</div>
        ) : (
          visibleGroups.map((group) => (
            <GroupSection
              key={group}
              group={group}
              skills={groupedSkills[group]}
              focusLevel={focusLevel}
            />
          ))
        )}
      </div>
    </main>
  );
}
