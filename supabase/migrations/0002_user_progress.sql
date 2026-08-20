-- language-stories: progreso de usuario real (auth + Supabase en vez de localStorage)

-- Nivel actual del usuario (antes vivía en profile.current_level de
-- localProgress.ts) y qué avisos de contenido adulto ya confirmó.
alter table profiles
  add column if not exists current_level text not null default 'A2',
  add column if not exists acknowledged_warnings text[] not null default '{}';

-- Estado de lectura por historia. story_id es el id sintético del cliente
-- (p.ej. "en-01", "re-en-01"), no una FK a la tabla stories, por la misma
-- razón que pronunciation_attempts.sentence_id: el contenido vive en
-- src/data/*.js.
create table if not exists story_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(id) on delete cascade,
  story_id text not null,
  status text not null check (status in ('nuevo', 'en_curso', 'leido')),
  last_sentence_index int not null default 0,
  updated_at timestamptz not null default now(),
  unique (user_id, story_id)
);

create index if not exists story_progress_user_idx on story_progress(user_id);

alter table story_progress enable row level security;

create policy "users can view their own story progress"
  on story_progress for select
  using (auth.uid() = user_id);

create policy "users can insert their own story progress"
  on story_progress for insert
  with check (auth.uid() = user_id);

create policy "users can update their own story progress"
  on story_progress for update
  using (auth.uid() = user_id);
