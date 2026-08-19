// Placeholder hand-written types matching supabase/migrations/0001_init.sql.
// Regenerate with `npx supabase gen types typescript --project-id <id> > src/types/supabase.ts`
// once the Supabase project exists, then this file becomes generated/read-only.

export interface Database {
  public: {
    Tables: {
      stories: {
        Row: {
          id: string;
          title: string;
          level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["stories"]["Insert"]>;
      };
      sentences: {
        Row: {
          id: string;
          story_id: string;
          order_index: number;
          text_en: string;
          text_es: string;
          audio_cache_url: string | null;
        };
        Insert: {
          id?: string;
          story_id: string;
          order_index: number;
          text_en: string;
          text_es: string;
          audio_cache_url?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["sentences"]["Insert"]>;
      };
      profiles: {
        Row: {
          id: string;
          display_name: string | null;
          created_at: string;
        };
        Insert: {
          id: string;
          display_name?: string | null;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["profiles"]["Insert"]>;
      };
      pronunciation_attempts: {
        Row: {
          id: string;
          user_id: string;
          sentence_id: string;
          accuracy_score: number;
          fluency_score: number;
          completeness_score: number;
          pronunciation_score: number;
          next_review_at: string | null;
          easiness_factor: number;
          interval_days: number;
          repetitions: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          sentence_id: string;
          accuracy_score: number;
          fluency_score: number;
          completeness_score: number;
          pronunciation_score: number;
          next_review_at?: string | null;
          easiness_factor?: number;
          interval_days?: number;
          repetitions?: number;
          created_at?: string;
        };
        Update: Partial<
          Database["public"]["Tables"]["pronunciation_attempts"]["Insert"]
        >;
      };
    };
  };
}
