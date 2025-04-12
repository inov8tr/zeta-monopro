'use server';

import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { SupabaseClient } from '@supabase/supabase-js';

import { Database } from './types';

/**
 * Create a Supabase client to use in Server Components.
 * Uses default cookie store from Next.js.
 */
export const createServerSupabaseClient = async (): Promise<SupabaseClient<Database>> => {
  const cookieStore = cookies();
  return createServerComponentClient<Database>({ cookies: () => cookieStore });
};
