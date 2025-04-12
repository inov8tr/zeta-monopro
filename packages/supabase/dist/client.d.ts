import { SupabaseClient } from '@supabase/supabase-js';

/**
 * Supabase client for use in client components (App Router).
 * Uses cookies/localStorage for auth persistence.
 */
declare const supabase: SupabaseClient;

export { supabase };
