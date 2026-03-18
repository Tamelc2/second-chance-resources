onst supabase = window.supabase.createClient(
  sb_publishable_EeVcBo6I96lkr49vy2Hg9g_0c2A7t3d
);eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwdW5naGJ4amxxbmJmbm9mdW13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1NTA1NDQsImV4cCI6MjA4ODEyNjU0NH0.NpfzVyXekSgU8gdGX4BEhDPAm0u8W3QqWLKQybnEoXg


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
async function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const prisonerId = document.getElementById("prisonerId").value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    alert(error.message);
    return;
  }

  await supabase.from("profiles").insert([
    {
      id: data.user.id,
      email: email,
      prisoner_id: prisonerId || null,
      skill_points: 0
    }
  ]);

  alert("Account created!");
}

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Logged in!");
    checkInterviewEligibility();
  }
