// Mock API utility for ColisPoint DZ
const users = [
  { id: 1, email: "test@test.com", password: "123123", role: "admin", name: "Admin User" },
  { id: 2, email: "test@test.com", password: "123123", role: "vendor", name: "Vendor User" },
  { id: 3, email: "test@test.com", password: "123123", role: "relay", name: "Relay Operator" },
];

let parcels = [
  { id: "DZ123456789", status: "Ready for Pickup", relayId: 1, client: "Ali", phone: "0555123456", region: "Alger", pin: "4821", history: ["Created", "Assigned to Relay", "Accepted", "Ready for Pickup"] },
];

let relayPoints = [
  { id: 1, name: "Boutique El Amine", address: "Rue Didouche Mourad, Alger Centre, Alger", hours: "09:00 - 19:00", status: "active", earnings: 12000 },
];

let orders = [
  { id: 1, vendorId: 2, parcelId: "DZ123456789", status: "Ready for Pickup", createdAt: Date.now() },
];

export function login(email, password, role) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(u => u.email === email && u.password === password && u.role === role);
      if (user) {
        resolve({ token: "mock-jwt-token", user });
      } else {
        reject(new Error("Invalid credentials or role"));
      }
    }, 700);
  });
}

export function getParcel(parcelId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const parcel = parcels.find(p => p.id === parcelId);
      if (parcel) resolve(parcel);
      else reject(new Error("Parcel not found"));
    }, 500);
  });
}

export function getUsers() {
  return new Promise(resolve => setTimeout(() => resolve(users), 500));
}

export function getRelayPoints() {
  return new Promise(resolve => setTimeout(() => resolve(relayPoints), 500));
}

export function getOrders() {
  return new Promise(resolve => setTimeout(() => resolve(orders), 500));
}

export function createOrder(order) {
  return new Promise(resolve => {
    setTimeout(() => {
      const newOrder = { ...order, id: orders.length + 1, createdAt: Date.now() };
      orders.push(newOrder);
      resolve(newOrder);
    }, 700);
  });
}

export function updateParcel(parcelId, updates) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const idx = parcels.findIndex(p => p.id === parcelId);
      if (idx !== -1) {
        parcels[idx] = { ...parcels[idx], ...updates };
        resolve(parcels[idx]);
      } else {
        reject(new Error("Parcel not found"));
      }
    }, 500);
  });
}

export function addRelayPoint(point) {
  return new Promise(resolve => {
    setTimeout(() => {
      const newPoint = { ...point, id: relayPoints.length + 1 };
      relayPoints.push(newPoint);
      resolve(newPoint);
    }, 700);
  });
}

export function updateRelayPoint(id, updates) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const idx = relayPoints.findIndex(r => r.id === id);
      if (idx !== -1) {
        relayPoints[idx] = { ...relayPoints[idx], ...updates };
        resolve(relayPoints[idx]);
      } else {
        reject(new Error("Relay point not found"));
      }
    }, 500);
  });
}

export function getVendorOrders(vendorId) {
  return new Promise(resolve => setTimeout(() => resolve(orders.filter(o => o.vendorId === vendorId)), 500));
}

export function getRelayParcels(relayId) {
  return new Promise(resolve => setTimeout(() => resolve(parcels.filter(p => p.relayId === relayId)), 500));
} 