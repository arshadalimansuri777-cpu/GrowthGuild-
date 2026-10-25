-- GrowthGuild: run this once in the Supabase SQL editor.
-- Both tables are INSERT-ONLY for the public (anon) key. Anon can never read, update or delete.

create table if not exists public.community_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  whatsapp_number text not null,
  role text,
  business text,
  source text default 'website',
  created_at timestamptz default now()
);

-- For later forms (the Free Audit CTA still uses its WhatsApp link for now).
create table if not exists public.audit_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  whatsapp_number text not null,
  business text,
  website text,
  created_at timestamptz default now()
);

alter table public.community_members enable row level security;
alter table public.audit_requests    enable row level security;

-- Anon may only INSERT.
drop policy if exists "anon can insert community_members" on public.community_members;
create policy "anon can insert community_members"
  on public.community_members for insert to anon with check (true);

drop policy if exists "anon can insert audit_requests" on public.audit_requests;
create policy "anon can insert audit_requests"
  on public.audit_requests for insert to anon with check (true);

-- Belt and braces: remove every other privilege from anon.
revoke select, update, delete on public.community_members from anon;
revoke select, update, delete on public.audit_requests    from anon;
grant insert on public.community_members to anon;
grant insert on public.audit_requests    to anon;
