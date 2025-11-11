export function registerUser(data) {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const exists = users.find((u) => u.email === data.email);
  if (exists) return { error: "Email already exists" };

  const newUser = { ...data };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  return { success: true };
}

export function loginUser({ email, password }) {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) return { error: "Invalid Email or Password" };

  // fake token
  const token = "FAKE-JWT-TOKEN";
  return { user, token };
}
