import { SupabaseClient } from '@supabase/supabase-js';

/**
 * Create a Supabase client to use in Server Components.
 * Uses default cookie store from Next.js.
 */
declare const createServerSupabaseClient: () => Promise<SupabaseClient>;

export { createServerSupabaseClient };
