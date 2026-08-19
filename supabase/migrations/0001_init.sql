-- language-stories: esquema inicial del MVP (fase 1)

create extension if not exists pgcrypto;

create table if not exists stories (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  level text not null check (level in ('A1','A2','B1','B2','C1','C2')),
  created_at timestamptz not null default now()
);

create table if not exists sentences (
  id uuid primary key default gen_random_uuid(),
  story_id uuid not null references stories(id) on delete cascade,
  order_index int not null,
  text_en text not null,
  text_es text not null,
  audio_cache_url text
);

create index if not exists sentences_story_id_order_idx
  on sentences(story_id, order_index);

-- Extiende auth.users con datos propios de la app.
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  created_at timestamptz not null default now()
);

create table if not exists pronunciation_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(id) on delete cascade,
  sentence_id uuid not null references sentences(id) on delete cascade,
  accuracy_score numeric not null,
  fluency_score numeric not null,
  completeness_score numeric not null,
  pronunciation_score numeric not null,
  -- Reservado para la fase 2 (repetición espaciada tipo SM-2). No hay
  -- lógica que las use todavía, solo se guarda el esquema para no migrar
  -- datos reales más adelante.
  next_review_at timestamptz,
  easiness_factor numeric not null default 2.5,
  interval_days int not null default 0,
  repetitions int not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists pronunciation_attempts_user_sentence_idx
  on pronunciation_attempts(user_id, sentence_id);

-- Row Level Security
alter table stories enable row level security;
alter table sentences enable row level security;
alter table profiles enable row level security;
alter table pronunciation_attempts enable row level security;

-- Lectura pública de historias y frases (contenido de la app, no datos de usuario).
create policy "stories are publicly readable"
  on stories for select
  using (true);

create policy "sentences are publicly readable"
  on sentences for select
  using (true);

-- Cada usuario solo ve/edita su propio perfil.
create policy "users can view their own profile"
  on profiles for select
  using (auth.uid() = id);

create policy "users can update their own profile"
  on profiles for update
  using (auth.uid() = id);

create policy "users can insert their own profile"
  on profiles for insert
  with check (auth.uid() = id);

-- Cada usuario solo ve/crea sus propios intentos de pronunciación.
create policy "users can view their own pronunciation attempts"
  on pronunciation_attempts for select
  using (auth.uid() = user_id);

create policy "users can insert their own pronunciation attempts"
  on pronunciation_attempts for insert
  with check (auth.uid() = user_id);

-- Crea el profile automáticamente al registrarse.
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id) values (new.id);
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
