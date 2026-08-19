export type StoryLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export interface Story {
  id: string;
  title: string;
  level: StoryLevel;
  created_at: string;
}

export interface Sentence {
  id: string;
  story_id: string;
  order_index: number;
  text_en: string;
  text_es: string;
  audio_cache_url: string | null;
}

export interface PronunciationAttempt {
  id: string;
  user_id: string;
  sentence_id: string;
  accuracy_score: number;
  fluency_score: number;
  completeness_score: number;
  pronunciation_score: number;
  created_at: string;
}

export interface PronunciationScoreResult {
  accuracyScore: number;
  fluencyScore: number;
  completenessScore: number;
  pronunciationScore: number;
}
