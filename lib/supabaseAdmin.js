import { createClient } from '@supabase/supabase-js';

// This client uses the SERVICE ROLE key — it must NEVER be imported
// into any file that runs in the browser. Only used inside /pages/api/*.
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } }
);
