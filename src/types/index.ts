export type LevelKey = 'A1' | 'A2' | 'A3';
export type SkillStatus = 'not-started' | 'in-progress' | 'completed';

export interface SkillLevelDetail {
  level: string;
  description: string;
  type: string;
}

export interface Skill {
  id: string;
  group: string;
  name: string;
  description: string;
  A1: SkillLevelDetail;
  A2: SkillLevelDetail;
  A3: SkillLevelDetail;
}

export interface SkillProgress {
  status: SkillStatus;
  notes: string;
}

export type ProgressMap = Record<string, SkillProgress>;
