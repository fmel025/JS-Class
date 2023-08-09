import { createClient } from '@supabase/supabase-js'

// Credenciales de supabase mediante un archivo de enviroment
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Lo exporto con las credenciales seteadas.
export const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey
);