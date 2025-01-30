import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tarftmmhhbslgntaoxgp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhcmZ0bW1oaGJzbGdudGFveGdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5NjgyODAsImV4cCI6MjA1MzU0NDI4MH0.k_d-qbr1Lv-FTsIMOucLHQUrY6PxMnnWl3w0txHSh6Y'; 

export const supabase = createClient(supabaseUrl, supabaseKey);
