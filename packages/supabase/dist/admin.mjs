// src/admin.ts
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
var createAdminClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment");
  }
  return createSupabaseClient(supabaseUrl, supabaseServiceKey);
};
export {
  createAdminClient
};
