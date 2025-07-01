# ColisDZ Frontend

ColisDZ is a parcel delivery management platform for Algeria, supporting vendors, relay operators, and administrators. This is the frontend (React + Vite) part of the project.

## Features

- Vendor, Relay Operator, and Admin dashboards
- Order management, relay point management, and employment applications
- Real-time notifications (toast system)
- Multi-language support (Arabic, French, English)
- Responsive, modern UI with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd NCS_HACK
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Building for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Accessing the App

- **Vendor Dashboard:** `/vendor/dashboard`
- **Relay Operator Dashboard:** `/relay/dashboard`
- **Admin Dashboard:** `/admin/dashboard`
- **Login/Register:** `/vendor/login`, `/relay/login`, `/admin`, etc.

> **Note:** The backend API must be running for full functionality. See the backend README in `Ncs_backend/README.md`.

## Project Structure

- `src/` — React source code
- `public/` — Static assets
- `Ncs_backend/` — Django backend (see its README)

## Backend

The backend is a Django REST API located in the `Ncs_backend/` directory. See [Ncs_backend/README.md](Ncs_backend/README.md) for backend setup and API details.

---

© 2025 wassely Team
