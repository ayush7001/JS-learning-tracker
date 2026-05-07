'use client';

import { useMemo } from 'react';
import { skills } from '@/data/skills';
import { LevelKey } from '@/types';
import { useProgress } from '@/context/ProgressContext';

interface WeekPlan {
  week: number;
  dateRange: string;
  title: string;
  levelFocus: LevelKey;
  skills: string[];
  goals: string;
}

interface MonthPlan {
  month: number;
  title: string;
  theme: string;
  dateRange: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  badgeBg: string;
  badgeText: string;
  weeks: WeekPlan[];
}

const PLAN: MonthPlan[] = [
  {
    month: 1,
    title: 'JavaScript Core & Web Foundations',
    theme: 'Build solid A1 → A2 fundamentals across JS, TypeScript & Frameworks',
    dateRange: 'May 7 – Jun 3, 2026',
    accentBg: 'bg-emerald-50',
    accentBorder: 'border-emerald-200',
    accentText: 'text-emerald-700',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    weeks: [
      {
        week: 1,
        dateRange: 'May 7 – 13',
        title: 'JavaScript Development Basics',
        levelFocus: 'A1',
        skills: ['html', 'css', 'javascript', 'typescript'],
        goals: 'HTML structure & semantics, CSS layouts (flexbox/grid), JS fundamentals (closures, async, OOP), TypeScript primitive types & interfaces',
      },
      {
        week: 2,
        dateRange: 'May 14 – 20',
        title: 'Browser & Dev Toolchain',
        levelFocus: 'A1',
        skills: ['javascript-in-browser', 'browser-apis', 'javascript-development-tools'],
        goals: 'DOM manipulation, event handling, Browser APIs (Fetch, Storage, Intersection Observer), webpack/Vite/ESLint/Prettier setup',
      },
      {
        week: 3,
        dateRange: 'May 21 – 27',
        title: 'Frontend Frameworks',
        levelFocus: 'A2',
        skills: ['javascript-top-frameworks', 'reactjs', 'angular', 'vuejs'],
        goals: 'Framework comparison, React hooks & component patterns, Angular DI/modules, Vue reactivity & Composition API',
      },
      {
        week: 4,
        dateRange: 'May 28 – Jun 3',
        title: 'Rendering Strategies & CSS Architecture',
        levelFocus: 'A2',
        skills: ['web-application-rendering-strategies', 'css-preprocessors', 'css-methodologies', 'css-frameworks'],
        goals: 'SSR vs CSR vs SSG trade-offs, SCSS variables & mixins, BEM/SMACSS naming, Tailwind utility-first approach',
      },
    ],
  },
  {
    month: 2,
    title: 'Advanced Web & Engineering Architecture',
    theme: 'Advance to A2 → A3: performance, platform & engineering principles',
    dateRange: 'Jun 4 – Jul 1, 2026',
    accentBg: 'bg-violet-50',
    accentBorder: 'border-violet-200',
    accentText: 'text-violet-700',
    badgeBg: 'bg-violet-100',
    badgeText: 'text-violet-800',
    weeks: [
      {
        week: 5,
        dateRange: 'Jun 4 – 10',
        title: 'Web Quality & Performance',
        levelFocus: 'A2',
        skills: [
          'cross-browser-compatible-html-css-markup',
          'web-communication-protocols',
          'web-performance-analysis-and-optimization',
          'frontend-web-accessibility',
        ],
        goals: 'Cross-browser polyfills, HTTP/2 & WebSockets, Core Web Vitals / Lighthouse, WCAG 2.1 AA compliance',
      },
      {
        week: 6,
        dateRange: 'Jun 11 – 17',
        title: 'Modern Web Technologies',
        levelFocus: 'A2',
        skills: ['content-management-systems', 'pwa-and-amp', 'nodejs', 'nodejs-core'],
        goals: 'Headless CMS patterns (Strapi/Contentful), PWA manifest & service workers, Node.js event loop, streams & modules',
      },
      {
        week: 7,
        dateRange: 'Jun 18 – 24',
        title: 'Platform, Infra & Security',
        levelFocus: 'A3',
        skills: [
          'web-application-hosting',
          'javascript-cross-mobile-platform',
          'common-security-knowledge',
          'cloud-fundamentals',
        ],
        goals: 'CI/CD & deployment pipelines, React Native / Capacitor, OWASP Top 10, AWS/Azure/GCP core services',
      },
      {
        week: 8,
        dateRange: 'Jun 25 – Jul 1',
        title: 'Engineering Foundations',
        levelFocus: 'A3',
        skills: [
          'software-engineering-knowledge-and-experience',
          'design-patterns',
          'software-design',
          'software-engineering-practices',
        ],
        goals: 'Engineering principles deep-dive, GoF & architectural patterns, SOLID/Clean Architecture, TDD/BDD & code review practices',
      },
    ],
  },
  {
    month: 3,
    title: 'A3 Excellence, Leadership & Soft Skills',
    theme: 'Achieve full A3 mastery — engineering processes, leadership & communication',
    dateRange: 'Jul 2 – 29, 2026',
    accentBg: 'bg-blue-50',
    accentBorder: 'border-blue-200',
    accentText: 'text-blue-700',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-800',
    weeks: [
      {
        week: 9,
        dateRange: 'Jul 2 – 8',
        title: 'Engineering Processes & AI Dev',
        levelFocus: 'A3',
        skills: ['software-engineering-processes', 'gen-ai-assisted-development', 'english'],
        goals: 'Agile/Scrum facilitation, sprint planning, AI-assisted dev workflows (Copilot/Claude), professional English communication',
      },
      {
        week: 10,
        dateRange: 'Jul 9 – 15',
        title: 'Leadership Fundamentals',
        levelFocus: 'A3',
        skills: ['leadership', 'ownership', 'communication', 'business-acumen', 'motivation'],
        goals: 'Technical leadership style, accountability at A3, stakeholder presentations, business KPIs, team motivation techniques',
      },
      {
        week: 11,
        dateRange: 'Jul 16 – 22',
        title: 'People & Team Dynamics',
        levelFocus: 'A3',
        skills: ['conflict-management', 'negotiations', 'managing-teamwork', 'consultancy', 'delegation'],
        goals: 'Conflict resolution frameworks, negotiation tactics, team health, consulting mindset, effective task delegation',
      },
      {
        week: 12,
        dateRange: 'Jul 23 – 29',
        title: 'Growth, Inclusion & Final Review',
        levelFocus: 'A3',
        skills: [
          'developing-others',
          'driving-change-and-innovation',
          'diversity-equity-and-inclusion',
          'being-a-team-player',
          'adaptability',
        ],
        goals: 'Mentoring & coaching, driving technical change, DEI practices, collaboration patterns, resilience under ambiguity',
      },
    ],
  },
];

const skillById = Object.fromEntries(skills.map((s) => [s.id, s]));

const levelColors: Record<LevelKey, { bg: string; text: string; border: string; dot: string }> = {
  A1: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-300', dot: 'bg-emerald-500' },
  A2: { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-300', dot: 'bg-violet-500' },
  A3: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-300', dot: 'bg-blue-500' },
};

const statusColors = {
  'not-started': 'bg-gray-200 text-gray-500',
  'in-progress': 'bg-amber-100 text-amber-700',
  'completed': 'bg-emerald-100 text-emerald-700',
};

const statusDot = {
  'not-started': 'bg-gray-300',
  'in-progress': 'bg-amber-400',
  'completed': 'bg-emerald-500',
};

function ProgressRing({ pct }: { pct: number }) {
  const r = 18;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  return (
    <svg width="44" height="44" className="-rotate-90">
      <circle cx="22" cy="22" r={r} fill="none" stroke="#e5e7eb" strokeWidth="4" />
      <circle
        cx="22" cy="22" r={r} fill="none"
        stroke={pct === 100 ? '#10b981' : pct > 0 ? '#f59e0b' : '#d1d5db'}
        strokeWidth="4"
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        style={{ transition: 'stroke-dasharray 0.5s ease' }}
      />
    </svg>
  );
}

export default function PlanPage() {
  const { getSkillProgress } = useProgress();

  const overallStats = useMemo(() => {
    const total = skills.length;
    const completed = skills.filter((s) => getSkillProgress(s.id).status === 'completed').length;
    const inProgress = skills.filter((s) => getSkillProgress(s.id).status === 'in-progress').length;
    return { total, completed, inProgress, pct: total ? Math.round((completed / total) * 100) : 0 };
  }, [getSkillProgress]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Top nav */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-bold text-gray-900">3-Month A1 → A3 Study Plan</h1>
            <p className="text-sm text-gray-500 mt-0.5">
              JavaScript (Frontend) · May – July 2026 · 49 skills across 12 weeks
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
            <span className="font-semibold text-emerald-600">{overallStats.completed}</span>
            <span className="text-gray-400">/</span>
            <span className="font-semibold text-gray-700">{overallStats.total} done</span>
            <span className="text-gray-300">|</span>
            <span className="font-semibold text-blue-600">{overallStats.pct}%</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6 space-y-10">
        {/* Legend */}
        <div className="flex flex-wrap gap-4 text-xs text-gray-500">
          {(['A1', 'A2', 'A3'] as LevelKey[]).map((lvl) => (
            <span key={lvl} className={`flex items-center gap-1.5 px-3 py-1 rounded-full border font-medium ${levelColors[lvl].bg} ${levelColors[lvl].text} ${levelColors[lvl].border}`}>
              <span className={`w-2 h-2 rounded-full ${levelColors[lvl].dot}`} />
              {lvl === 'A1' ? 'A1 — Junior level' : lvl === 'A2' ? 'A2 — Mid level' : 'A3 — Senior level'}
            </span>
          ))}
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-gray-200 bg-white">
            <span className="w-2 h-2 rounded-full bg-gray-300" /> Not started
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-200 bg-amber-50 text-amber-700">
            <span className="w-2 h-2 rounded-full bg-amber-400" /> In progress
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500" /> Completed
          </span>
        </div>

        {/* Month cards */}
        {PLAN.map((month) => {
          const monthSkillIds = month.weeks.flatMap((w) => w.skills);
          const monthCompleted = monthSkillIds.filter(
            (id) => getSkillProgress(id).status === 'completed'
          ).length;
          const monthPct = Math.round((monthCompleted / monthSkillIds.length) * 100);

          return (
            <section key={month.month}>
              {/* Month header */}
              <div className={`rounded-2xl border-2 ${month.accentBorder} ${month.accentBg} p-5 mb-4`}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-bold uppercase tracking-wider ${month.accentText} ${month.badgeBg} px-2 py-0.5 rounded`}>
                        Month {month.month}
                      </span>
                      <span className="text-xs text-gray-400">{month.dateRange}</span>
                    </div>
                    <h2 className="text-lg font-bold text-gray-900">{month.title}</h2>
                    <p className="text-sm text-gray-600 mt-0.5">{month.theme}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative flex items-center justify-center">
                      <ProgressRing pct={monthPct} />
                      <span className="absolute text-xs font-bold text-gray-700">{monthPct}%</span>
                    </div>
                    <div className="text-right text-xs text-gray-500">
                      <div className="font-semibold text-gray-800 text-sm">{monthCompleted}/{monthSkillIds.length}</div>
                      <div>skills done</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weeks grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {month.weeks.map((week) => {
                  const weekCompleted = week.skills.filter(
                    (id) => getSkillProgress(id).status === 'completed'
                  ).length;
                  const weekInProgress = week.skills.filter(
                    (id) => getSkillProgress(id).status === 'in-progress'
                  ).length;
                  const weekPct = Math.round((weekCompleted / week.skills.length) * 100);
                  const lc = levelColors[week.levelFocus];

                  return (
                    <div
                      key={week.week}
                      className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
                    >
                      {/* Week header */}
                      <div className={`px-4 pt-4 pb-3 border-b border-gray-100`}>
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                                Week {week.week}
                              </span>
                              <span className="text-xs text-gray-400">{week.dateRange}</span>
                              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${lc.bg} ${lc.text} ${lc.border}`}>
                                Focus: {week.levelFocus}
                              </span>
                            </div>
                            <h3 className="text-sm font-bold text-gray-900">{week.title}</h3>
                          </div>
                          <div className="shrink-0 text-right">
                            <div className="text-sm font-bold text-gray-800">
                              {weekCompleted}/{week.skills.length}
                            </div>
                            <div className="text-xs text-gray-400">done</div>
                          </div>
                        </div>

                        {/* Progress bar */}
                        <div className="mt-2 w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                          <div className="h-full flex">
                            <div
                              className="bg-emerald-500 transition-all duration-500"
                              style={{ width: `${weekPct}%` }}
                            />
                            <div
                              className="bg-amber-400 transition-all duration-500"
                              style={{ width: `${Math.round((weekInProgress / week.skills.length) * 100)}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Goals */}
                      <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
                        <p className="text-xs text-gray-500 leading-relaxed">
                          <span className="font-semibold text-gray-600">Goals: </span>{week.goals}
                        </p>
                      </div>

                      {/* Skills list */}
                      <div className="px-4 py-3 space-y-2">
                        {week.skills.map((skillId) => {
                          const skill = skillById[skillId];
                          if (!skill) return null;
                          const prog = getSkillProgress(skillId);
                          const levelDetail = skill[week.levelFocus];

                          return (
                            <div key={skillId} className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2 min-w-0">
                                <span className={`w-2 h-2 rounded-full shrink-0 ${statusDot[prog.status]}`} />
                                <div className="min-w-0">
                                  <span className="text-xs font-medium text-gray-800 truncate block">{skill.name}</span>
                                  {levelDetail?.level && (
                                    <span className="text-xs text-gray-400">{levelDetail.level}</span>
                                  )}
                                </div>
                              </div>
                              <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${statusColors[prog.status]}`}>
                                {prog.status === 'not-started' ? 'To do' : prog.status === 'in-progress' ? 'Doing' : 'Done'}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}

        {/* Summary timeline */}
        <section className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h2 className="text-sm font-bold text-gray-900 mb-4">12-Week Timeline Overview</h2>
          <div className="space-y-2">
            {PLAN.flatMap((m) =>
              m.weeks.map((w) => {
                const done = w.skills.filter((id) => getSkillProgress(id).status === 'completed').length;
                const pct = Math.round((done / w.skills.length) * 100);
                const lc = levelColors[w.levelFocus];
                return (
                  <div key={w.week} className="flex items-center gap-3">
                    <span className="text-xs text-gray-400 w-14 shrink-0">Wk {w.week}</span>
                    <span className="text-xs text-gray-500 w-28 shrink-0 hidden sm:block">{w.dateRange}</span>
                    <span className={`text-xs font-semibold px-1.5 py-0.5 rounded shrink-0 ${lc.bg} ${lc.text}`}>
                      {w.levelFocus}
                    </span>
                    <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${pct === 100 ? 'bg-emerald-500' : pct > 0 ? 'bg-amber-400' : 'bg-gray-200'}`}
                        style={{ width: `${pct || 2}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 w-16 text-right shrink-0">
                      {done}/{w.skills.length} · {pct}%
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
