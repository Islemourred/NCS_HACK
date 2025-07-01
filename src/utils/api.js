const API_BASE = "http://localhost:8000/api_users"; // Updated to match backend route

let parcels = [
  {
    tracking_number: "DZ001234",
    order: {
      vendor: "أحمد متجر الإلكترونيات",
      product: "هاتف ذكي سامسونج S21",
      client_name: "فاطمة الزهراء",
      client_phone: "+213 555 111 222",
      client_address: "شارع الحرية، الجزائر العاصمة",
      relay_point: "نقطة ترحيل باب الزوار",
    },
    status: "ARRIVED_AT_RELAY",
    package_weight: 2.5,
    package_type: "Standard",
    fragile: true,
    estimated_delivery: "2024-06-10T15:00:00Z",
    notes: "يرجى التعامل بحذر",
    created_at: "2024-06-01T10:00:00Z",
  },
  {
    tracking_number: "DZ001235",
    order: {
      product: "قميص رجالي كلاسيكي",
      client_name: "يوسف العلي",
      client_phone: "+213 555 333 444",
      client_address: "حي النصر، وهران",
      vendor: "سوق النور للأزياء",
      relay_point: "نقطة ترحيل وهران المركزية",
    },
    status: "DELIVERED",
    package_weight: 1.2,
    package_type: "Express",
    fragile: false,
    estimated_delivery: "2024-06-09T12:00:00Z",
    notes: "",
    created_at: "2024-06-02T09:00:00Z",
  },
  {
    tracking_number: "DZ001236",
    order: {
      product: "مكمل غذائي للأطفال",
      client_name: "زينب حسني",
      client_phone: "+213 555 555 666",
      client_address: "حي الورود، البليدة",
      vendor: "صيدلية الشفاء",
      relay_point: "نقطة ترحيل البليدة",
    },
    status: "READY_FOR_PICKUP",
    package_weight: 0.8,
    package_type: "Standard",
    fragile: false,
    estimated_delivery: "2024-06-11T17:00:00Z",
    notes: "",
    created_at: "2024-06-03T11:00:00Z",
  },
];

let relayPoints = [
  {
    id: 1,
    name: "Boutique El Amine",
    address: "Rue Didouche Mourad, Alger Centre, Alger",
    hours: "09:00 - 19:00",
    status: "active",
    earnings: 12000,
  },
];

let orders = [
  {
    id: 1,
    vendorId: 2,
    parcelId: "DZ123456789",
    status: "Ready for Pickup",
    createdAt: Date.now(),
  },
];

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
  const res = await fetch(`${API_BASE}/createuser/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.errorMessage || "Registration failed");
  }
  return res.json();
}

export function getParcel(parcelId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const parcel = parcels.find((p) => p.tracking_number === parcelId);
      if (parcel) resolve(parcel);
      else reject(new Error("Parcel not found"));
    }, 500);
  });
}

export function getUsers() {
  return new Promise((resolve) => setTimeout(() => resolve(users), 500));
}

export function getRelayPoints() {
  return new Promise((resolve) => setTimeout(() => resolve(relayPoints), 500));
}

export function getOrders() {
  return new Promise((resolve) => setTimeout(() => resolve(orders), 500));
}

// export function createOrder(order) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const newOrder = {
//         ...order,
//         id: orders.length + 1,
//         createdAt: Date.now(),
//       };
//       orders.push(newOrder);
//       resolve(newOrder);
//     }, 700);
//   });
// }

// export function updateParcel(parcelId, updates) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const idx = parcels.findIndex((p) => p.id === parcelId);
//       if (idx !== -1) {
//         parcels[idx] = { ...parcels[idx], ...updates };
//         resolve(parcels[idx]);
//       } else {
//         reject(new Error("Parcel not found"));
//       }
//     }, 500);
//   });
// }

export function addRelayPoint(point) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newPoint = { ...point, id: relayPoints.length + 1 };
      relayPoints.push(newPoint);
      resolve(newPoint);
    }, 700);
  });
}

export function getVendorOrders(vendorId) {
  return new Promise((resolve) =>
    setTimeout(
      () => resolve(orders.filter((o) => o.vendorId === vendorId)),
      500
    )
  );
}

export function getRelayParcels(relayId) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(parcels.filter((p) => p.relayId === relayId)), 500)
  );
}

// --- Relay Points ---
export async function fetchRelayPoints() {
  const res = await fetch(`${API_BASE}/relay-points/`);
  return res.json();
}
export async function createRelayPoint(data) {
  const res = await fetch(`${API_BASE}/relay-points/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
export async function updateRelayPoint(id, data) {
  const res = await fetch(`${API_BASE}/relay-points/${id}/`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
export async function deleteRelayPoint(id) {
  await fetch(`${API_BASE}/relay-points/${id}/`, { method: "DELETE" });
}

// --- Orders ---
export async function fetchOrders() {
  const res = await fetch(`${API_BASE}/orders/`);
  return res.json();
}
export async function createOrder(data) {
  const res = await fetch(`${API_BASE}/orders/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
export async function updateOrder(id, data) {
  const res = await fetch(`${API_BASE}/orders/${id}/`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
export async function deleteOrder(id) {
  await fetch(`${API_BASE}/orders/${id}/`, { method: "DELETE" });
}

// --- Parcels ---
export async function fetchParcels() {
  const res = await fetch(`${API_BASE}/logistics/packages/`);
  return res.json();
}
export async function createParcel(data) {
  const res = await fetch(`${API_BASE}/logistics/packages/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
export async function updateParcel(id, data) {
  const res = await fetch(`${API_BASE}/logistics/packages/${id}/`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
export async function deleteParcel(id) {
  await fetch(`${API_BASE}/logistics/packages/${id}/`, { method: "DELETE" });
}

// --- Employment Posts ---
export async function fetchEmploymentPosts() {
  const res = await fetch(`${API_BASE}/employment-posts/`);
  return res.json();
}
export async function createEmploymentPost(data) {
  const res = await fetch(`${API_BASE}/employment-posts/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
export async function updateEmploymentPost(id, data) {
  const res = await fetch(`${API_BASE}/employment-posts/${id}/`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
export async function deleteEmploymentPost(id) {
  await fetch(`${API_BASE}/employment-posts/${id}/`, { method: "DELETE" });
}

// --- Applications (with file upload support) ---
export async function fetchApplications() {
  const res = await fetch(`${API_BASE}/applications/`);
  return res.json();
}
export async function createApplication(data) {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) formData.append(key, value);
  });
  const res = await fetch(`${API_BASE}/applications/`, {
    method: "POST",
    body: formData,
  });
  return res.json();
}
export async function updateApplication(id, data) {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) formData.append(key, value);
  });
  const res = await fetch(`${API_BASE}/applications/${id}/`, {
    method: "PUT",
    body: formData,
  });
  return res.json();
}
export async function deleteApplication(id) {
  await fetch(`${API_BASE}/applications/${id}/`, { method: "DELETE" });
}

// --- Vendors ---
export async function fetchVendors() {
  const res = await fetch(`${API_BASE}/vendors/`);
  return res.json();
}
export async function createVendor(data) {
  const res = await fetch(`${API_BASE}/vendors/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
export async function updateVendor(id, data) {
  const res = await fetch(`${API_BASE}/vendors/${id}/`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
export async function deleteVendor(id) {
  await fetch(`${API_BASE}/vendors/${id}/`, { method: "DELETE" });
}
