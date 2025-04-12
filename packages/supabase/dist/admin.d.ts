import { SupabaseClient } from '@supabase/supabase-js';

/**
 * Creates a Supabase admin client using the service role key.
 * Only use this on the server — never expose the service key to the client.
 */
declare const createAdminSupabaseClient: () => SupabaseClient;

export { createAdminSupabaseClient };
