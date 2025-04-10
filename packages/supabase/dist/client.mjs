"use client";

// src/client.ts
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
var supabase = createPagesBrowserClient();
export {
  supabase
};
