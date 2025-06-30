module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ["Inter", "system-ui", "sans-serif"],
        },
        colors: {
          primary: {
            DEFAULT: '#2563eb', // blue-600
            light: '#3b82f6', // blue-500
            dark: '#1e40af', // blue-800
          },
          accent: {
            DEFAULT: '#06b6d4', // cyan-500
            light: '#67e8f9', // cyan-300
          },
          gray: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
          },
        },
      },
    },
    plugins: [],
  }