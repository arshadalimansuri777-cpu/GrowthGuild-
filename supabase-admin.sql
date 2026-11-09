-- GrowthGuild ADMIN setup. Run this WHOLE file once in Supabase > SQL Editor > New query > Run.
-- Safe to run again any time (it only creates or replaces things).
--
-- STEP 1: put the email(s) you use to LOG IN to admin.html in the list below.
-- (The old version only allowed one fixed email, so any other login saw an empty panel.)

create table if not exists public.admin_emails (
  email text primary key
);
alter table public.admin_emails enable row level security;
revoke all on public.admin_emails from anon, authenticated;

insert into public.admin_emails (email) values
  ('mansuriarshad018@gmail.com')
  -- , ('your-other-login@gmail.com')   <- add more like this, then run again
on conflict do nothing;

-- Returns true only when the logged-in user's email is in admin_emails.
create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.admin_emails
    where lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  );
$$;
revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to anon, authenticated;

-- ---------- Form submissions: admin can read ----------
drop policy if exists "admin can read community_members" on public.community_members;
create policy "admin can read community_members"
  on public.community_members for select to authenticated using (public.is_admin());

drop policy if exists "admin can read audit_requests" on public.audit_requests;
create policy "admin can read audit_requests"
  on public.audit_requests for select to authenticated using (public.is_admin());

grant select on public.community_members to authenticated;
grant select on public.audit_requests to authenticated;

-- ---------- News posts (managed from admin.html, shown on /news.html) ----------
create table if not exists public.news_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text,
  body text not null default '',
  cover_url text,
  category text default 'Update',
  meta_title text,
  meta_description text,
  published boolean not null default false,
  published_at timestamptz default now(),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create or replace function public.news_touch() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;
drop trigger if exists news_touch on public.news_posts;
create trigger news_touch before update on public.news_posts
  for each row execute function public.news_touch();

alter table public.news_posts enable row level security;

drop policy if exists "public can read published news" on public.news_posts;
create policy "public can read published news"
  on public.news_posts for select to anon, authenticated
  using (published = true and published_at <= now());

drop policy if exists "admin can read all news" on public.news_posts;
create policy "admin can read all news"
  on public.news_posts for select to authenticated using (public.is_admin());

drop policy if exists "admin can insert news" on public.news_posts;
create policy "admin can insert news"
  on public.news_posts for insert to authenticated with check (public.is_admin());

drop policy if exists "admin can update news" on public.news_posts;
create policy "admin can update news"
  on public.news_posts for update to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "admin can delete news" on public.news_posts;
create policy "admin can delete news"
  on public.news_posts for delete to authenticated using (public.is_admin());

grant select on public.news_posts to anon, authenticated;
grant insert, update, delete on public.news_posts to authenticated;
