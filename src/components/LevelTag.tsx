const levelColors: Record<string, string> = {
  'Beginner': 'bg-sky-100 text-sky-700',
  'Intermediate': 'bg-violet-100 text-violet-700',
  'Advanced': 'bg-orange-100 text-orange-700',
  'Expert': 'bg-red-100 text-red-700',
};

export function LevelTag({ level }: { level: string }) {
  if (!level) return null;
  const cls = levelColors[level] ?? 'bg-gray-100 text-gray-600';
  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${cls}`}>{level}</span>
  );
}

export function TypeTag({ type }: { type: string }) {
  if (!type) return null;
  const cls = type === 'Core'
    ? 'bg-blue-100 text-blue-700 border border-blue-200'
    : 'bg-gray-100 text-gray-500 border border-gray-200';
  return (
    <span className={`text-xs px-2 py-0.5 rounded ${cls}`}>{type}</span>
  );
}
