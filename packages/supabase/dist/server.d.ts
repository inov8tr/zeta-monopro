import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from './types.js';

/**
 * Create a Supabase client to use in Server Components.
 * Uses default cookie store from Next.js.
 */
declare const createServerSupabaseClient: () => Promise<SupabaseClient<Database>>;

export { createServerSupabaseClient };
