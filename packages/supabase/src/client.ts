'use client';

import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import type { SupabaseClient } from '@supabase/supabase-js';

/**
 * Supabase client for use in client components (App Router).
 * Uses cookies/localStorage for auth persistence.
 */
export const supabase: SupabaseClient = createPagesBrowserClient();
