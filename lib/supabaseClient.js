// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://hkudlgewxyixhwrazsmc.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrdWRsZ2V3eHlpeGh3cmF6c21jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2MTg1NTgsImV4cCI6MjA3MTE5NDU1OH0.Oj4gobxd-_JRCQ3K1rPUU65mi2YDyDt9pDX4xiA3zeE"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
