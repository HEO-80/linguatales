// Placeholder hand-written types matching supabase/migrations/*.sql.
// Regenerate with `npx supabase gen types typescript --project-id <id> > src/types/supabase.ts`
// once desired, then this file becomes generated/read-only.
//
// Every table needs `Relationships: []` (even with no FKs modeled here) —
// postgrest-js's GenericTable requires it, otherwise the whole Row/Insert/
// Update trio silently degrades to `never` instead of a real type error.

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
        Relationships: [];
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
        Relationships: [];
      };
      profiles: {
        Row: {
          id: string;
          display_name: string | null;
          current_level: string;
          acknowledged_warnings: string[];
          created_at: string;
        };
        Insert: {
          id: string;
          display_name?: string | null;
          current_level?: string;
          acknowledged_warnings?: string[];
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["profiles"]["Insert"]>;
        Relationships: [];
      };
      story_progress: {
        Row: {
          id: string;
          user_id: string;
          story_id: string;
          status: "nuevo" | "en_curso" | "leido";
          last_sentence_index: number;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          story_id: string;
          status: "nuevo" | "en_curso" | "leido";
          last_sentence_index?: number;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["story_progress"]["Insert"]>;
        Relationships: [];
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
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
  };
}
