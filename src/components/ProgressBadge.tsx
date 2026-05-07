'use client';

import { SkillStatus } from '@/types';

const config: Record<SkillStatus, { label: string; className: string }> = {
  'not-started': { label: 'Not Started', className: 'bg-gray-100 text-gray-500' },
  'in-progress': { label: 'In Progress', className: 'bg-amber-100 text-amber-700' },
  'completed': { label: 'Completed', className: 'bg-emerald-100 text-emerald-700' },
};

export function ProgressBadge({ status }: { status: SkillStatus }) {
  const { label, className } = config[status];
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${className}`}>
      {label}
    </span>
  );
}
