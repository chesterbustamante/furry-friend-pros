-- Add DELETE policy for profiles table
-- Users can delete their own profile data (GDPR "right to be forgotten")
CREATE POLICY "Users can delete own profile"
  ON public.profiles FOR DELETE
  TO authenticated
  USING (auth.uid() = id);

-- Add DELETE policy for user_roles table
-- Explicitly prevent direct role deletion by users
-- Roles should only be deleted via database triggers (cascade from auth.users)
-- or admin-controlled RPC functions
CREATE POLICY "Prevent direct role deletion"
  ON public.user_roles FOR DELETE
  TO authenticated
  USING (false);