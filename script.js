import { createClient } from ‘https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm’

const supabase = createClient(

  https://wpunghbxjlqnbfnofumw.supabase.co
)eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwdW5naGJ4amxxbmJmbm9mdW13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1NTA1NDQsImV4cCI6MjA4ODEyNjU0NH0.NpfzVyXekSgU8gdGX4BEhDPAm0u8W3QqWLKQybnEoXg

async function loadJobs() {
  const { data, error } = await supabase
    .from(‘jobs’)
    .select(‘*’)

  console.log(data)
}

loadJobs()
