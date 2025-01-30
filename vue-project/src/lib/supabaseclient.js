// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://tarftmmhhbslgntaoxgp.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhcmZ0bW1oaGJzbGdudGFveGdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5NjgyODAsImV4cCI6MjA1MzU0NDI4MH0.k_d-qbr1Lv-FTsIMOucLHQUrY6PxMnnWl3w0txHSh6Y';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
