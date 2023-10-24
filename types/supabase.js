import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ekndpczqlutxzbglyjxd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrbmRwY3pxbHV0eHpiZ2x5anhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcxODMyMjksImV4cCI6MjAxMjc1OTIyOX0.Xbng7C0CangqiUnXv3Refy8OjLaPAlsos9jDvUyd_UI'
export const supabase = createClient(supabaseUrl, supabaseKey)