'use client';

import { useState } from 'react';
import { Skill, LevelKey, SkillStatus } from '@/types';
import { useProgress } from '@/context/ProgressContext';
import { ProgressBadge } from './ProgressBadge';
import { LevelTag, TypeTag } from './LevelTag';

const LEVELS: LevelKey[] = ['A1', 'A2', 'A3'];

const levelLabels: Record<LevelKey, string> = {
  A1: 'A1 Junior',
  A2: 'A2 Engineer',
  A3: 'A3 Senior',
};

interface Props {
  skill: Skill;
  focusLevel: LevelKey;
}

export function SkillCard({ skill, focusLevel }: Props) {
  const { getSkillProgress, updateStatus, updateNotes } = useProgress();
  const prog = getSkillProgress(skill.id);
  const [expanded, setExpanded] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);
  const [draftNotes, setDraftNotes] = useState(prog.notes);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateStatus(skill.id, e.target.value as SkillStatus);
  };

  const saveNotes = () => {
    updateNotes(skill.id, draftNotes);
    setNotesOpen(false);
  };

  const statusBorderColor = {
    'not-started': 'border-l-gray-300',
    'in-progress': 'border-l-amber-400',
    'completed': 'border-l-emerald-500',
  }[prog.status];

  return (
    <div className={`bg-white border border-gray-200 border-l-4 ${statusBorderColor} rounded-xl shadow-sm hover:shadow-md transition-shadow`}>
      {/* Header */}
      <div className="flex items-start justify-between gap-3 p-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-900 text-sm">{skill.name}</h3>
            <TypeTag type={skill[focusLevel].type} />
            <LevelTag level={skill[focusLevel].level} />
          </div>
          {skill.description && (
            <p className="text-xs text-gray-500 line-clamp-2">{skill.description}</p>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <select
            value={prog.status}
            onChange={handleStatusChange}
            className="text-xs border border-gray-200 rounded-lg px-2 py-1.5 bg-white text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="not-started">Not Started</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      {/* A3 highlight — always visible for target level */}
      {focusLevel === 'A3' && skill.A3.description && (
        <div className="mx-4 mb-3 bg-blue-50 border border-blue-100 rounded-lg p-3">
          <div className="text-xs font-semibold text-blue-700 mb-1.5">A3 Requirements (Target)</div>
          <p className="text-xs text-blue-800 whitespace-pre-line leading-relaxed">{skill.A3.description}</p>
        </div>
      )}

      {/* Toggle detailed view */}
      <div className="px-4 pb-3 flex items-center gap-3">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
        >
          {expanded ? '▲ Hide' : '▼ Show'} all levels
        </button>
        <button
          onClick={() => { setNotesOpen(!notesOpen); setDraftNotes(prog.notes); }}
          className="text-xs text-gray-500 hover:text-gray-800 font-medium flex items-center gap-1"
        >
          {prog.notes ? '📝 Notes' : '+ Notes'}
        </button>
        {prog.notes && <span className="text-xs text-gray-400 italic truncate max-w-xs">{prog.notes.slice(0, 60)}{prog.notes.length > 60 ? '…' : ''}</span>}
      </div>

      {/* All levels expanded */}
      {expanded && (
        <div className="border-t border-gray-100 px-4 pb-4 pt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
          {LEVELS.map((lvl) => (
            <div
              key={lvl}
              className={`rounded-lg p-3 ${lvl === 'A3' ? 'bg-blue-50 border border-blue-200' : lvl === 'A2' ? 'bg-violet-50 border border-violet-100' : 'bg-gray-50 border border-gray-100'}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-bold ${lvl === 'A3' ? 'text-blue-700' : lvl === 'A2' ? 'text-violet-700' : 'text-gray-600'}`}>
                  {levelLabels[lvl]}
                </span>
                <div className="flex gap-1">
                  <LevelTag level={skill[lvl].level} />
                  <TypeTag type={skill[lvl].type} />
                </div>
              </div>
              {skill[lvl].description ? (
                <p className="text-xs text-gray-700 whitespace-pre-line leading-relaxed">{skill[lvl].description}</p>
              ) : (
                <p className="text-xs text-gray-400 italic">No requirements specified</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Notes editor */}
      {notesOpen && (
        <div className="border-t border-gray-100 px-4 pb-4 pt-3">
          <textarea
            className="w-full text-xs border border-gray-200 rounded-lg p-2.5 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            rows={3}
            placeholder="Add your notes, resources, or progress updates..."
            value={draftNotes}
            onChange={(e) => setDraftNotes(e.target.value)}
          />
          <div className="flex gap-2 mt-2">
            <button
              onClick={saveNotes}
              className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 font-medium"
            >
              Save
            </button>
            <button
              onClick={() => setNotesOpen(false)}
              className="text-xs text-gray-500 px-3 py-1.5 rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
