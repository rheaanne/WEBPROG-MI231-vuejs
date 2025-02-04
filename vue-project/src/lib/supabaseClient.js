import { supabase } from '@/lib/supabaseClient'

const supabaseUrl = 'https://tarftmmhhbslgntaoxgp.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)