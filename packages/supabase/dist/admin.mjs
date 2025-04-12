"use server";

// src/admin.ts
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
var createAdminSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error(
      "Missing environment variables: NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY"
    );
  }
  return createSupabaseClient(supabaseUrl, supabaseServiceRoleKey);
};
export {
  createAdminSupabaseClient
};
