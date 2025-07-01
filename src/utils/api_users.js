const API_BASE = "http://localhost:8000/users";

export async function login(numero_de_telephone, password) {
  const res = await fetch(`${API_BASE}/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ numero_de_telephone, password }),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.errorMessage || "Login failed");
  }
  return res.json();
}

export async function register(userData) {
  // Map phone to numero_de_telephone for backend compatibility
  const payload = {
    ...userData,
    numero_de_telephone: userData.phone || userData.numero_de_telephone,
  };
  const res = await fetch(`${API_BASE}/createuser/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.errorMessage || "Registration failed");
  }
  return res.json();
}
