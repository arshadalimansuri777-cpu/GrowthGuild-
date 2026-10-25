-- Lets ONLY your admin login read the form data. Run once in the Supabase SQL editor.
drop policy if exists "admin can read community_members" on public.community_members;
create policy "admin can read community_members"
  on public.community_members for select to authenticated
  using ((auth.jwt() ->> 'email') = 'mansuriarshad018@gmail.com');

drop policy if exists "admin can read audit_requests" on public.audit_requests;
create policy "admin can read audit_requests"
  on public.audit_requests for select to authenticated
  using ((auth.jwt() ->> 'email') = 'mansuriarshad018@gmail.com');

grant select on public.community_members to authenticated;
grant select on public.audit_requests to authenticated;
