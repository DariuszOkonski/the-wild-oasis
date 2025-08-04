import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://utycmysejhoantpdpzxa.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0eWNteXNlamhvYW50cGRwenhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxNjMxMDIsImV4cCI6MjA2ODczOTEwMn0.cfP9pk6XFUMbPacaVK6AjT3Hgd4ERumLFe878Fl5s9Q';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
