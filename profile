<h2>Create Account</h2>

<input type="email" id="email" placeholder="Email" />
<input type="password" id="password" placeholder="Password" />

<input type="text" id="prisonerId" placeholder="Prisoner ID (Optional)" />

<button onclick="signUp()">Sign Up</button>
async function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const prisonerId = document.getElementById("prisonerId").value;

  // Create user
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password
  });

  if (error) {
    alert(error.message);
    return;
  }

  // Save extra info in profiles table
  const user = data.user;

  await supabase.from("profiles").insert([
    {
      id: user.id,
      email: email,
      prisoner_id: prisonerId || null
    }
  ]);

  alert("Account created!");
