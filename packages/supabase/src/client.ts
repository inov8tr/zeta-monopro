'use client';

import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';

/**
 * Supabase client for use in client components (App Router)
 */
export const supabase = createPagesBrowserClient();
